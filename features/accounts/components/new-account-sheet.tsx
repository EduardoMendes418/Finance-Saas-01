import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

export const NewAccountSheet = () => {
  return (
    <Sheet>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a New Account to track yout transactions
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
