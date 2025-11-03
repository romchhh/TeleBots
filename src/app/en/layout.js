import dynamic from 'next/dynamic';
import { NavbarProvider } from '../../context/NavbarContext';
import { LanguageProvider } from '../../context/LanguageContext';
import Header from '../../ui/Header';

// Lazy load non-critical components
const ToastContainer = dynamic(() => import('react-toastify').then(mod => ({ default: mod.ToastContainer })), {
  ssr: false,
  loading: () => <div className="toast-placeholder" />
});

export default function EnLayout({ children }) {
  return (
    <>
      <NavbarProvider>
        <LanguageProvider>
          <ToastContainer />
          <Header />
          {children}
        </LanguageProvider>
      </NavbarProvider>
    </>
  );
}

