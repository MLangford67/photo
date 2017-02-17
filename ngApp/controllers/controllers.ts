namespace photo.Controllers {

    export class HomeController {
      public file;
      public url;

      public photo = {url:'', _id:''};

      public deletePhoto(id) {
        this.photoService.deletePhoto(id).then(() => {
          this.$window.location.reload();
   })
 }

      constructor(

          private $scope: ng.IScope,
          private photoService: photo.Services.PhotoService,
          public $window,
          public $location,
          public $state
 ) {

   this.photo = this.photoService.getPhoto();
 // console.log(this.photos)
 }


}


export class AddPhotoController {
  public photo;       // = {url:'', _id:''};
  public id

  public addPhoto() {
    this.photoService.savePhoto(this.photo).then(() => {
      this.$state.go('home');
    })
  }
  public pickFile () {
    this.filepickerService.pick({
      mimetype: 'image/*'
    }, this.fileUploaded.bind(this));
  }

  public fileUploaded(file) {
    this.photo.url = file.url;
    this.photoService.savePhoto(this.photo);
  }


  constructor(
    private filepickerService,
    private photoService: photo.Services.PhotoService,
    public $state
  ) {

  }
}
export class EditPhotoController{
  public photo = {url:'', _id:''};
  public photos;
  public id;

 public editPhoto(photo) {

  //  this.photo._id = this.id;
       this.photoService.savePhoto(this.photo).then(() => {
         this.$state.go('home');
       })

  // this.photo._id = this.photo;
  // this.photo.url = photo.url;
  // this.photoService.editPhoto(this.id ,photo).then(() => {
  //   this.$state.go('home');
  // })

 }
 public pickFile () {
   this.filepickerService.pick({
     mimetype: 'image/*'
   }, this.fileUploaded.bind(this));
 }

 public fileUploaded(file) {
   this.photo.url = file.url;
   this.photoService.savePhoto(this.photo);

 }
 constructor(
   private filepickerService,
   private photoService: photo.Services.PhotoService,
   public $state,
   public $stateParams: ng.ui.IStateParamsService
 ) {

    this.photo['_id'] = $stateParams['id'];


 }
}

}
