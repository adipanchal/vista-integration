import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter((path) => path);

  return (
    <div className="breadcrumbs uppercase text-sm w-full max-sm:text-center tracking-widest text-white">
      <Link to="/" className="hover:text-primary">Home</Link>
      {paths.map((path, index) => (
        <span key={index}>
          {' / '}
          {index === paths.length - 1 ? (
            <span className="text-primary">{path}</span>
          ) : (
            <Link 
              to={`/${paths.slice(0, index + 1).join('/')}`} 
              className="hover:text-primary"
            >
              {path}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
