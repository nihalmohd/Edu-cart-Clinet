
import SimpleSlider from '../../Components/Home/Banner'
import CategoryDisplay from '../../Components/Home/CategoryDisplay'
import CourseDisplay from '../../Components/Home/CourseDisplay'
import Nav from '../../Components/Home/Nav'

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