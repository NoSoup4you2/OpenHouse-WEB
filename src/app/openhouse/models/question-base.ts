export class QuestionBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    placeholder: string;
    function: string;
    options: {key: string, value: string, click?: string}[];
    class: string;
  
    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        placeholder?: string;
        function?: string;
        options?: {key: string, value: string, click?: string}[];
        class?: string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.placeholder = options.placeholder || '';
      this.function = options.function || '';
      this.options = options.options || [];
      this.class = options.class || '';
    }
  }
  