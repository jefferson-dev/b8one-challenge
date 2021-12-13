interface fields {
  fields: [
    {
      field: string;
      message: string;
    },
  ];
}

export default class ValidationError {
  fields: fields[];

  name: string;

  message: string;

  statusCode: number;

  constructor(
    fields: fields[],
    name = 'Validation Error',
    message = 'Some fields are not valid',
    statusCode = 400,
  ) {
    this.name = name;
    this.message = message;
    this.fields = fields;
    this.statusCode = statusCode;
  }
}
