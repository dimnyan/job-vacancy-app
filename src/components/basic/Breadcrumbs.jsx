import Link from "next/link";

const Breadcrumbs = ({path}) => {
  return (
    <div className="breadcrumbs text-sm mb-5">
      <ul>
        {path.map((item, index) => (
            path.length - 1 === index ?
              <li key={index} className="capitalize text-slate-900">{item}</li>
              :
              <li key={index} className="capitalize text-slate-900">
                <Link href={`/${item}`} className="capitalize text-slate-600">
                  {item}
                </Link>
              </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;