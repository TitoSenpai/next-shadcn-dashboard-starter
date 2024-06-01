import BreadCrumb from '@/components/breadcrumb';
import { UserClient } from '@/components/tables/hero-tables/client';
import { heroes } from '@/constants/herodata';

const breadcrumbItems = [{ title: 'Hero', link: '/dashboard/heroes' }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={heroes} />
      </div>
    </>
  );
}
