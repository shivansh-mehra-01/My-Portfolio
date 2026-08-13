import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  const iconPath = path.join(process.cwd(), 'app', 'base-icon.png');
  const iconData = fs.readFileSync(iconPath);
  const base64Icon = iconData.toString('base64');
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          overflow: 'hidden',
        }}
      >
        <img 
          src={`data:image/png;base64,${base64Icon}`} 
          style={{ 
            width: '160%', 
            height: '160%',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
