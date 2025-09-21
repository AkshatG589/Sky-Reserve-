import React from "react";
import { Dialog } from "@headlessui/react";
import Button from "./ui/Button"; // ✅ Import your UI Button component

export default function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <Dialog.Panel className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 flex flex-col gap-4 relative">
        {/* Close button at top-right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✖
        </button>

        {/* Modal Title */}
        <Dialog.Title className="text-lg font-semibold">{title || "Confirm"}</Dialog.Title>

        {/* Modal Message */}
        <p className="text-gray-700">{message || "Are you sure?"}</p>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 mt-2">
          {/* Delete first */}
          <Button size="sm" variant="destructive" onClick={onConfirm} className="bg-red-600 hover:bg-red-700 text-white">
            Delete
          </Button>
          {/* Cancel second */}
          <Button size="sm" variant="destructive" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}