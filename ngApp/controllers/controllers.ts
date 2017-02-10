namespace photo.Controllers {

    export class HomeController {
      public file;
      public url;


  public pickFile () {
    this.filepickerService.pick({
      mimetype: 'image/*'
    }, this.fileUploaded.bind(this));
  }

  public fileUploaded(file) {
    this.photo.url = file.url;
    this.photoService.savePhoto(this.photo);
  }


      public photo;

      public deletePhoto(id) {
        this.photoService.deletePhoto(id).then(() => {
          this.$window.location.reload();
   })
 }

      constructor(
          private filepickerService,
          private $scope: ng.IScope,
          private photoService: photo.Services.PhotoService,
          public $window,
          public $location,
          public $state
 ) {
   this.photo = photoService.getPhoto();
 }


}


export class AddPhotoController {
  public photo;

  public addPhoto() {
    this.photoService.savePhoto(this.photo).then(() => {
      this.$state.go('home');
    })
  }

  constructor(
    private photoService: photo.Services.PhotoService,
    public $state
  ) {

  }
}
export class EditPhotoController{
  public photo;
  public id;

 public editPhoto() {
   this.photo._id = this.id;
   this.photoService.savePhoto(this.photo).then(() => {
     this.$state.go('home');
   })
 }

 constructor(
   private photoService: photo.Services.PhotoService,
   public $state,
   public $stateParams
 ) {
   if($stateParams) {
     this.id = $stateParams['id'];
   }
 }
}

}
