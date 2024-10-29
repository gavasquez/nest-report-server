import type{ TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name: string;
}

export const getHelloWordlRepor = (options: ReportOptions): TDocumentDefinitions => {
  const { name } = options;
  const docDefinition: TDocumentDefinitions= {
    content: [ `Hello ${name} `],
  };
  return docDefinition;
}