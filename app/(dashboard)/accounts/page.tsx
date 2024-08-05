"use client";

import { useNewAccount } from "@/features/hooks/use-new-account";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

import { DataTable } from "@/components/data-table/data-table";
import { Payment, columns } from "./columns";
import { Row } from "@tanstack/react-table";

const data: Payment[] = [
  {
    id: "1",
    amount: 100,
    status: "pending",
    email: "m@examples.com",
  },
  {
    id: "2",
    amount: 500,
    status: "success",
    email: "eduardo@examples.com",
  },
];

const AccountPage = () => {
  const newAccount = useNewAccount();
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-20 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="size-4 mr-2" />
            Add New
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            filterKey={"email"}
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountPage;
