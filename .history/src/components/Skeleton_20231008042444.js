import classNames from "classnames"

function Skeleton({times}) {
    const outerClassNames=classNames(
        'relative','overflow-hidden','bg-gray-200', 'rounded','mb-2.5'
    );
    const innerClassNames=classNames(
        'animate-shimmer','absolute','inset-0','-translate-x-full','bg-gradient-to-r','from-gray-200','via-white','to-gray-200'
    );

    const boxes=Array(times).fill(0).map((_,i)=>{
        return <div className={outerClassNames}><div key={i} className={innerClassNames}  /></div>
    });

    return boxes
    
  return (
    <div>
      
    </div>
  )
}

export default Skeleton