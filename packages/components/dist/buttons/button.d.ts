declare type Props = {
    children?: string | never[];
    /**
     * This triggers the onclick
     */
    onClick?: () => void;
    /**
     * Use this or children to provide text for the button
     */
    text?: string;
    primary?: boolean;
};
export declare const Button: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=button.d.ts.map