/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
var sampleAlbums = [];
sampleAlbums.push({
             artistName: 'Ladyhawke',
             name: 'Ladyhawke',
             releaseDate: '2008, November 18',
             genres: [ 'new wave', 'indie rock', 'synth pop' ]
           });
sampleAlbums.push({
             artistName: 'The Knife',
             name: 'Silent Shout',
             releaseDate: '2006, February 17',
             genres: [ 'synth pop', 'electronica', 'experimental' ]
           });
sampleAlbums.push({
             artistName: 'Juno Reactor',
             name: 'Shango',
             releaseDate: '2000, October 9',
             genres: [ 'electronic', 'goa trance', 'tribal house' ]
           });
sampleAlbums.push({
             artistName: 'Philip Wesley',
             name: 'Dark Night of the Soul',
             releaseDate: '2008, September 12',
             genres: [ 'piano' ]
           });
/* end of hard-coded data */




$(document).ready(function() {
  console.log('app.js loaded!');
  //sampleAlbums.forEach(function(element){
  //  renderAlbum(element);
  //  console.log("Albums Rendered");
  //});
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleSuccess,
    error: handleError
  });


function handleSuccess (albums) {
    sampleAlbums.forEach(function(album) {
      renderAlbum(album);
    });
};

function handleError(err){
  console.log('There has been an error: ', err);
}

function renderAlbum(album){
console.log('rendering album:', album);
var albumHtml = (`

        <!-- one album -->
        <div class="row album" data-album-id=${album.id}>

          <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-default">
              <div class="panel-body">


              <!-- begin album internal row -->
                <div class='row'>
                  <div class="col-md-3 col-xs-12 thumbnail album-art">
                    <img src="images/800x800.png" alt="album image">
                  </div>

                  <div class="col-md-9 col-xs-12">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <h4 class='inline-header'>Album Name:</h4>
                        <span class='album-name'>${album.name}</span>
                      </li>

                      <li class="list-group-item">
                        <h4 class='inline-header'>Artist Name:</h4>
                        <span class='artist-name'>${album.artist}</span>
                      </li>

                      <li class="list-group-item">
                        <h4 class='inline-header'>Released date:</h4>
                        <span class='album-releaseDate'>${album.releaseDate}</span>
                      </li>
                    </ul>
                  </div>

                </div>
                <!-- end of album internal row -->

                <div class='panel-footer'>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- end one album -->

  `)
  $('#albums').prepend(albumHtml);
};
});
