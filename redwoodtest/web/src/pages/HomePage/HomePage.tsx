import styled from 'styled-components'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const H1 = styled.h1`
  margin: 20px;
  width: calc(100% - 40px);
  font-size: 30px;
  text-align: center;
`
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <H1>103 ТрО ЗСУ</H1>

      <Link to={routes.posts()}>
        <img width="300" height="500" src="img/103_logo.png" alt="" />
      </Link>
    </>
  )
}

export default HomePage
