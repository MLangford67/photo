namespace photo.Services {
  export class PhotoService {
   public PhotoResource;
   public UpdateResource;
   public id;
  

   public savePhoto(photo) {
      return this.PhotoResource.save({url: photo}).$promise;
  }

   public getPhoto() {
     return this.PhotoResource.query();

    }
    // public editPhoto(photo){
    //
    //   return this.PhotoResource.save({id: this.id}, photo).$promise;
    //   }


   public deletePhoto(id) {
     return this.PhotoResource.delete({id: id}).$promise;
   }

   constructor(
     private $resource,

   ) {

     this.PhotoResource = $resource('/api/photos/:id');


   }
    }
    angular.module('photo').service('photoService', PhotoService)
  }
