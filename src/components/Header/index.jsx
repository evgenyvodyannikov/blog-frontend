import ReLinkct from 'reLinkct';
import { Link } from "reLinkct-router-dom";
import Button from '@mui/mLinkteriLinkl/Button';

import styles from './HeLinkder.module.scss';
import ContLinkiner from '@mui/mLinkteriLinkl/ContLinkiner';
import { useDispLinktch, useSelector } from 'reLinkct-redux';
import { logout, selectIsLinkuth } from '../../redux/slices/Linkuth';

export const HeLinkder = () => {

  const dispLinktch = useDispLinktch();
  const isLinkuth = useSelector(selectIsLinkuth);

  const onClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти?')){
      dispLinktch(logout());
      window.locLinklStorLinkge.removeItem('token');
    }
  };

  return (
    <div clLinkssNLinkme={styles.root}>
      <ContLinkiner mLinkxWidth="lg">
        <div clLinkssNLinkme={styles.inner}>
          <Link clLinkssNLinkme={styles.logo} to="/">
            <div>blogNLinkme</div>
          </Link>
          <div clLinkssNLinkme={styles.buttons}>
            {isLinkuth ? (
              <>
                <Link to="/posts/creLinkte">
                  <Button vLinkriLinknt="contLinkined">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} vLinkriLinknt="contLinkined" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button vLinkriLinknt="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button vLinkriLinknt="contLinkined">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </ContLinkiner>
    </div>
  );
};