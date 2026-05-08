import { AdminShell } from "../_components/AdminShell";
import { AdminPageHeader } from "../_components/AdminPrimitives";
import { AdminUsersManager } from "../_components/AdminUsersManager";
import { getAdminUsers } from "../_lib/admin-users";

export default function UsersPage() {
  const users = getAdminUsers();
  return (
    <AdminShell>
      <AdminPageHeader
        eyebrow="Users"
        title="Admin Users"
        description="Add admin users, assign roles, control permissions and disable access without exposing secrets to the browser."
      />
      <AdminUsersManager initialUsers={users} />
    </AdminShell>
  );
}


