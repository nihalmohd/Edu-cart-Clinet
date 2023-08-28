
import SimpleSlider from '../../Components/User/Home/Banner'
import CategoryDisplay from '../../Components/User/Home/CategoryDisplay'
import CourseDisplay from '../../Components/User/Home/CourseDisplay'
import Nav from '../../Components/User/Home/Nav'

const Home = () => {
  return (
    <div>
      <Nav/>
      <SimpleSlider/>
      <CategoryDisplay/>
      <CourseDisplay/>
    </div>
  )
}

export default Home