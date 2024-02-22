import React from "react"

interface props {
    locale?: String,
    link?: String,
    children?: React.ReactNode;
}

type ButtomProps = JSX.IntrinsicElements['div'] & props;

const Buttom: React.FC<ButtomProps> = ({locale, link, children}) => {

    const filter = React.useMemo(() => {
        if (locale === 'top') return "h-12 w-38 mt-[0.3125rem] bg-slate-900 hover:bg-slate-700 rounded-xl text-white duration-500 font-bold";
        if (locale === 'modal') return "h-12 w-40 mt-[0.3125rem] bg-slate-900 hover:bg-slate-700 rounded-xl text-white duration-500 font-bold";
    }, [locale]);

    return (
        <button className={`${filter}`}><a href={`${link}`} target="_blank" rel="noreferrer">{children}</a></button>
    );
};

export default Buttom;
