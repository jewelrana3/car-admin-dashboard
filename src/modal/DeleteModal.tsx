import Modal from './Modal';

interface DeleteModalPros {
    isOpen: boolean;
    onClose: () => void;
}

export default function DeleteModal({ isOpen, onClose }: DeleteModalPros) {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 w-[350px] text-center relative">
                    {/* Modal Text */}
                    <p className=" font-bold text-black text-2xl mt-4 ">
                        Are you sure Delete this <br /> Booking Details?
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-4 mt-8">
                        <button
                            className="border border-stoke text-black px-6 py-2 rounded-md  transition w-[130px] h-[48px] text-[20px]"
                            onClick={onClose}
                        >
                            No
                        </button>
                        <button
                            className="bg-red-500 text-white px-6 py-2 rounded-md w-[130px] h-[48px] text-[18px]"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
