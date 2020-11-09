class Application {
  constructor() {
    console.log('app::init')

    this.isPress = false
    this.position = {
      x: 0,
      y: 0
    }

    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    
    this.dom = {
      // circle: document.querySelector('.circle'),
      catchMe: document.querySelector('.catchMe'),
      sudokou: document.querySelector('.sudokou'),
      course: document.querySelector('.course'),
      labirinth: document.querySelector('.labirinth'),
      catchContent: document.querySelector('.catchContent'),
      sudokouContent: document.querySelector('.sudokouContent'),
      courseContent: document.querySelector('.courseContent'),
      labirinthContent: document.querySelector('.labirinthContent')
    }

    this.size = {
      // circle: this.dom.circle.offsetWidth
    }

    this.addListeners()
  }

  addListeners() {
    /**
     * click
     * mousemove
     * mousedown
     * mouseup
     * mouseenter
     * mouseleave
     * 
     * scroll
     * resize
     */

    //ecoute du menu _________________________________________________
    this.dom.catchMe.addEventListener('click', this.oncatchmeClick)
    this.dom.sudokou.addEventListener('click', this.onSudokouClick)
    this.dom.course.addEventListener('click', this.onCourseClick)
    this.dom.labirinth.addEventListener('click', this.onLabirinthclick)
    //fin ecoute du menu ______________________________________________

    // this.dom.circle.addEventListener('mouseenter', this.onMouseEnter)
    // this.dom.circle.addEventListener('mouseleave', this.onMouseLeave)

    window.addEventListener('resize', this.onResize)
    window.addEventListener('mousemove', this.onMouseMove)

    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
  }

   //les fonctions _________________________ 
   oncatchmeClick(){
    // alert('12345')
    this.dom.catchContent.removeAttribute("hidden")
    // console.log('12345')
  }

  onSudokouClick(){
    alert('chargement du sudokou')
    // console.log('12345')
  }

  onCourseClick(){
    alert('chargement de la course')
    // console.log('12345')
  }

  onLabirinthclick(){
    alert('chargement du labirinth')
    // console.log('12345')
  }
  //fin les fonctions ______________________ 
  
  
  

 

 

}

new Application()