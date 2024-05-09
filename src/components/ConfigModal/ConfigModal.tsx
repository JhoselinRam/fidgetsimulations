import { Dialog, DialogTrigger, Modal } from "react-aria-components"
import type { ConfigModalProps } from "./ConfigModal_types"
import ConfigModalClose from "./resources/ConfigModalClose/ConfigModalClose"
import ConfigModalCancel from "./resources/ConfigModalCancel/ConfigModalCancel"
import ConfigModalAccept from "./resources/ConfigModalAccept/ConfigModalAccept"

function ConfigModal({
  children,
  onAccept,
  onCancel,
  triggerElement,
  className,
  isKeyboardDismissDisabled
}: ConfigModalProps): JSX.Element {
  return (
    <DialogTrigger>
      {triggerElement}
      <Modal
        className="w-full max-w-modal h-full relative bg-tuatara-900 rounded-md pt-2 pb-3 px-5
      sm:max-h-modal"
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      >
        <Dialog
          className={`outline-none w-full h-full flex flex-col ${className}`}
        >
          {({ close }) => (
            <>
              {children}
              <ConfigModalClose close={close} />
              <div className="w-full flex flex-col-reverse gap-2 x2s:flex-row x2s:justify-end x2s:gap-3">
                <ConfigModalCancel close={close} onCancel={onCancel} />
                <ConfigModalAccept close={close} onAccept={onAccept} />
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default ConfigModal
