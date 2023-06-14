const Header = () => {
  const today = new Date();
  const weekday = ['일', '월', '화', '수', '목', '금', '토']

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = weekday[today.getDay()];

  return (
    <header className="page-header">
      <h1 className="header-title">My To-do List</h1>
      <p className="header-date">{year}년 {month}월 {date}일 {day}요일</p>
    </header>)
}

export default Header;
