export const site = {
  name: 'MetaRemover',
  shortName: 'MetaRemover',
  url: 'https://metaremover.github.io',
  description:
    'Remove EXIF data and image metadata from JPG, PNG, and WebP files directly in your browser.',
  socialImage: '/og-card.svg',
};

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/remove-exif-from-jpg/', label: 'JPG' },
  { href: '/remove-exif-from-png/', label: 'PNG' },
  { href: '/remove-exif-from-webp/', label: 'WebP' },
  { href: '/faq/', label: 'FAQ' },
];

export const formatPages = [
  {
    href: '/remove-exif-from-jpg/',
    title: 'Remove EXIF From JPG',
    shortTitle: 'JPG',
    description:
      'Strip camera model, GPS coordinates, timestamps, and other EXIF fields from JPEG and JPG photos before sharing them.',
  },
  {
    href: '/remove-exif-from-png/',
    title: 'Remove Metadata From PNG',
    shortTitle: 'PNG',
    description:
      'Clean PNG files before publishing screenshots, product images, or design assets where hidden metadata is not needed.',
  },
  {
    href: '/remove-exif-from-webp/',
    title: 'Remove Metadata From WebP',
    shortTitle: 'WebP',
    description:
      'Delete metadata from modern WebP images while keeping the process local to the browser.',
  },
];

export const articlePages = [
  {
    href: '/what-is-exif-data/',
    title: 'What Is EXIF Data?',
    description: 'A simple explanation of the information cameras and phones can store inside image files.',
  },
  {
    href: '/why-remove-photo-metadata/',
    title: 'Why Remove Photo Metadata?',
    description: 'Learn when hidden data adds privacy, security, or workflow risks before you share an image.',
  },
  {
    href: '/how-to-remove-location-from-photos/',
    title: 'How To Remove Location From Photos',
    description: 'A practical guide to deleting GPS coordinates before posting or sending images.',
  },
];

export const workflowSteps = [
  {
    title: 'Drop in your image',
    description: 'Choose a JPG, PNG, or WebP file from your device. The file is handled in your browser.',
  },
  {
    title: 'Review detected metadata',
    description:
      'The tool shows the EXIF fields it can read, such as camera model, date taken, and location tags.',
  },
  {
    title: 'Download the cleaned copy',
    description:
      'One click creates a fresh image without the embedded metadata, ready to share with more confidence.',
  },
];

export const trustPoints = [
  'Your image stays on your device during processing.',
  'No account is required to use the remover.',
  'Built for quick cleanup before uploads, email, or public sharing.',
];

export const sampleMetadata = [
  'Camera: iPhone 15 Pro',
  'Date taken: 2026-03-12 17:42',
  'GPS: 40.7580, -73.9855',
  'Lens: 24 mm f/1.8',
  'Software: iOS 19.2',
];

export const removedMetadata = [
  'Camera details',
  'GPS coordinates',
  'Timestamps',
  'Software tags',
  'Lens information',
];

export const toolFaqs = [
  {
    question: 'Does this site upload my image to a server?',
    answer:
      'No. The remover is built for browser-side processing, so the file stays on your device while the cleaned copy is generated.',
  },
  {
    question: 'Which image formats are supported?',
    answer: 'The first release supports JPG, PNG, and WebP images.',
  },
  {
    question: 'Will removing metadata reduce image quality?',
    answer:
      'The tool creates a fresh export of your image. For most sharing use cases the result looks the same, but it is still smart to double-check important originals.',
  },
  {
    question: 'Can this remove GPS location from phone photos?',
    answer:
      'Yes. If the location is stored in EXIF metadata, exporting a cleaned copy removes that information from the downloaded file.',
  },
  {
    question: 'Is batch processing available?',
    answer:
      'Not in this first version. The v1 experience is intentionally focused on single-image cleanup with clear privacy messaging.',
  },
];
