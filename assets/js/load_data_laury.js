// Load data from a JSON larps and display it on the page
document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/data/judges.json')
        .then(response => response.json())
        .then(data => {
            const creators = document.getElementById('judges');

            data.forEach(creator => {
                const creatorDiv = document.createElement('div');
                creatorDiv.classList.add('col-xs-12');
                creatorDiv.classList.add('col-sm-6');
                creatorDiv.classList.add('col-md-3');

                creatorDiv.innerHTML = `
                    <div class="lgx-single-speaker2 lgx-single-speaker3">
                        <figure>
                            <a class="profile-img"><img
                                    src="/assets/img/people/${creator.filename}"
                                    alt="Speaker"/></a>
                            <figcaption>
                                <div class="speaker-info">
                                    <h3 class="title"><a>${creator.name}</a></h3>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                `;

                creators.appendChild(creatorDiv);

            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});