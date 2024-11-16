import MainHeader from '@/components/main-header/main-header';
import './globals.css';


export const metadata = {
  title: 'Fuji XT-30 Mark II',
  description: 'A compact and powerful mirrorless camera known for its advanced features and excellent image quality.',
  brand: 'Fujifilm',
  type: 'Mirrorless Camera',
  sensor: 'APS-C X-Trans CMOS 4',
  maxImageResolution: '6240 x 4160 pixels',
  isoRange: '160-12800 (expandable to 80-51200)',
  videoResolution: '4K at 30p',
  connectivity: ['Wi-Fi', 'Bluetooth'],
  weight: '383g (body only)',
  releaseDate: 'March 2021',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
