import MainLayout from '../app/components/layouts/MainLayout';
import MainLayoutContextProvider from '../app/context/MainLayoutContextProvider';

export default function Home() {
  return (
    <MainLayoutContextProvider>
      <MainLayout />
    </MainLayoutContextProvider>
  );
}
