import { createColumnHelper } from '@tanstack/react-table';

import { EditIcon } from '@/components/icons/edit-icon';
import { DeleteIcon } from '@/components/icons/delete-icon';
import { PlusIcon } from '@/components/icons/plus-icon';
import { formatRelativeDate } from '@/utils/date';

import { Workflow } from '@/types/workflow';

const columnHelper = createColumnHelper<Workflow>();

export const columns = [
  columnHelper.accessor('type', {
    header: 'Type',
    cell: (info) => <span className='text-text-muted font-normal'>{info.getValue()}</span>,
    size: 170,
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
    size: 650,
  }),
  columnHelper.accessor('tags', {
    header: 'Tags',
    cell: (info) => {
      const tags = info.getValue() || [];
      return (
        <div className='flex gap-2 group'>
          {tags.length === 0 ? (
            <div className='invisible group-hover:visible'>
              <span className='px-2 py-1 text-xs rounded-full border border-border bg-white flex items-center gap-2 cursor-pointer text-text-tertiary'>
                <PlusIcon width={8} height={8} fill='#808593' />
                Add tag
              </span>
            </div>
          ) : tags.length === 1 ? (
            <span className='px-2 py-1 text-xs rounded-full border border-border bg-white flex items-center gap-2'>
              <div className='w-2 h-2 rounded-sm' style={{ backgroundColor: tags[0].color }} />
              {tags[0].name}
            </span>
          ) : (
            <span className='px-2 py-1 text-xs rounded-full border border-border bg-white flex items-center gap-2'>
              <div className='flex gap-0.5'>
                <div className='w-2 h-2 rounded-sm' style={{ backgroundColor: tags[0].color }} />
                {tags.length > 1 && <div className='w-2 h-2 rounded-sm' style={{ backgroundColor: tags[1].color }} />}
              </div>
              {tags.length} tags
            </span>
          )}
        </div>
      );
    },
    size: 187,
  }),
  columnHelper.accessor('last_updated', {
    header: 'Last Updated',
    cell: (info) => <span className='text-text-muted font-normal'>{formatRelativeDate(info.getValue())}</span>,
    size: 134,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className='flex gap-2'>
        <button className='flex items-center justify-center p-1.5 bg-text-primary/[0.04] rounded-md h-6 w-6'>
          <EditIcon />
        </button>
        <button className='flex items-center justify-center p-1.5 bg-text-primary/[0.04] rounded-md h-6 w-6'>
          <DeleteIcon />
        </button>
      </div>
    ),
    size: 88,
  }),
];
