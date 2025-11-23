"use client";

import { useState } from "react";
import { Trello } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createWorkspace } from "@/lib/services/api/workspace/create-workspace";
import { CreateWorkspaceDialogProps } from "@/types";

export function CreateWorkspaceDialog({
  workspaceTypes,
  trigger,
}: CreateWorkspaceDialogProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      await createWorkspace(formData);
      toast.success("Workspace created successfully!");
      setOpen(false);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create workspace"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-6xl p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Create a Workspace</DialogTitle>
          <DialogDescription>
            Create a new workspace for your team
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/* Left side - Form */}
          <div className="pt-14 pb-8 px-8 order-2 md:order-1 max-w-[420px] mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
              Let&apos;s build a Workspace
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Boost your productivity by making it easier for everyone to access
              boards in one location.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="text-sm text-muted-foreground font-semibold mb-1.5 block"
                >
                  Workspace name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Taco's Co."
                  required
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  This is the name of your company, team or organization.
                </p>
              </div>

              <div>
                <Label
                  htmlFor="type_id"
                  className="text-sm text-muted-foreground font-semibold mb-1.5 block"
                >
                  Workspace type
                </Label>
                <Select name="type_id" required>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose..." />
                  </SelectTrigger>
                  <SelectContent>
                    {workspaceTypes.map((type) => (
                      <SelectItem key={type.id} value={type.id}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="description"
                  className="text-sm text-muted-foreground font-semibold mb-1.5 block"
                >
                  Workspace description{" "}
                  <span className="text-muted-foreground font-normal">
                    Optional
                  </span>
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Our team organizes everything here."
                  rows={4}
                  className="w-full resize-none"
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  Get your members on board with a few words about your
                  Workspace.
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-primary/50 text-primary-foreground rounded"
              >
                {loading ? "Creating..." : "Continue"}
              </Button>
            </form>
          </div>

          {/* Right side - Illustration */}
          <div className="bg-linear-to-br from-cyan-100 via-teal-100 to-green-100 p-8 flex items-center justify-center relative order-1 md:order-2 min-h-[300px] md:min-h-0">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-8 h-8 bg-cyan-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 -left-4 w-6 h-6 bg-teal-400 rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-12 w-4 h-4 bg-green-400 rounded-full opacity-60"></div>

              <div className="relative bg-linear-to-br from-cyan-400 to-green-400 rounded-lg p-6 w-64 h-48 shadow-xl">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded flex items-center justify-center">
                  <Trello className="w-6 h-6 text-primary" />
                </div>

                <div className="absolute top-16 left-4 right-4 space-y-2">
                  <div className="bg-white rounded shadow-md p-3 h-16 flex flex-col justify-between">
                    <div className="h-1.5 bg-muted rounded w-3/4"></div>
                    <div className="h-1.5 bg-muted rounded w-1/2"></div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="bg-white rounded shadow-md p-3 h-16 flex flex-col justify-between">
                    <div className="h-1.5 bg-muted rounded w-2/3"></div>
                    <div className="h-1.5 bg-muted rounded w-3/4"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-sm"></div>
                  </div>

                  <div className="bg-white rounded shadow-md p-3 h-16"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
