export interface FunctionalComponent {
  (props: any): JSX.Element | null | false;
}
