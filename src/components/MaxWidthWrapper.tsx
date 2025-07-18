import { cn } from '@/lib/utils';
import {ReactNode} from 'react';
const MaxWidthWrapper = ({ // 2 inputs classname and children
    className, 
    children
}:{
    className?: string; //classname is of type string and children is of ype REACTNODe
    children: ReactNode
}) => {
    return (
        <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper