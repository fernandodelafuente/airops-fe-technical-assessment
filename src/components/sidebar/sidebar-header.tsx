const BrandLogo = () => {
  return (
    <div className='flex items-center gap-2'>
      <div className='w-9 h-9 bg-brand-purple rounded'></div>
      <span className='font-semibold text-sm'>AirOps</span>
    </div>
  );
};

export const SidebarHeader = () => {
  return (
    <header className='px-4 py-2'>
      <BrandLogo />
    </header>
  );
};
