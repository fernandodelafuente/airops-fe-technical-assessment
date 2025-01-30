import { useQuery } from '@tanstack/react-query';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { columns } from './columns';

import { generateWorkflows } from '@/services/workflows-service';
import { Workflow } from '@/types/workflow';

const TableSkeleton = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b'>
            {columns.map((column, index) => (
              <th key={index} className='px-4 py-3 text-left text-sm font-semibold text-primary' style={{ minWidth: column.size, maxWidth: column.size }}>
                {column.header?.toString()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {columns.map((column, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className='px-4 py-5 text-sm' style={{ minWidth: column.size, maxWidth: column.size }}>
                  <div className='h-5 bg-gray-200 rounded animate-pulse'></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const DataTable = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['workflows'],
    queryFn: () => generateWorkflows({ payload: { inputs: { count: 5 } } }), // Hardcoded 5 for challenge purposes
  });

  const table = useReactTable<Workflow>({
    data: data?.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <TableSkeleton />;
  }

  if (error) {
    return <div className='w-full p-4 text-center text-red-500'>Error loading workflows</div>;
  }

  return (
    <div className='w-full overflow-x-auto'>
      <table className='w-full border-collapse'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className='border-b'>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className='px-4 py-3 text-left text-sm font-semibold text-primary' style={{ minWidth: header.column.getSize(), maxWidth: header.column.getSize() }}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='border-b hover:bg-gray-50'>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='px-4 py-4 text-sm' style={{ minWidth: cell.column.getSize(), maxWidth: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
