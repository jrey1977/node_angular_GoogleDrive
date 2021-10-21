export interface Archivo {
  id: string; // '1G0_S1QrrW17V_C7JbWLrDb3xaNwa_tfN'
  name: string; // 'piscinita.jpg'
  parents: string[]; // ['1qfLV68mzQZtmlVf37sFFd_Z_BDgeWBhn']
  size: number; // 772822
  webContentLink: string; // Url de descarga de archivo
  // 'https://drive.google.com/uc?id=1GD-IOE0bHf3rNBSaj2x5XTIzJeKmYubX&export=download'
  webViewLink: string; // Url para ver imagen
  // 'https://drive.google.com/file/d/1GD-IOE0bHf3rNBSaj2x5XTIzJeKmYubX/view?usp=drivesdk'
  iconLink: string; // 'https://drive-thirdparty.googleusercontent.com/16/type/image/jpeg'
  hasThumbnail: boolean; // true
  createdTime: Date; // 2021-08-22T13:32:12.268Z
  modifiedTime: Date; // '2021-08-22T13:32:10.874Z'
  etiquetas?: string[]; // ['1qfLV68mzQZtmlVf37sFFd_Z_BDgeWBhn']
  fileExtension?: string; // jpg, png...
  thumbnailLink?: string; // 'https://lh3.googleusercontent.com/KQJYTlUFD-cN6kXBTztf7vD9MEQ6AZVcpWCn8KhkKEXkfXZ7yB80MBgEBMRJkjtfB7YCIitaatEXLsc=s220'
  width?: number; // 1000
  height?: number; // 750
  durationMillis?: number; // 0
}
