import classes from './Layout.module.css';
import Navigation from './Navigation';
import { LayoutProps } from '../../types/appTypes';

function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;