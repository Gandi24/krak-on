// Load data from a JSON larps and display it on the page
document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/data/organisers.json')
        .then(response => response.json())
        .then(data => {
            data = data.slice().sort(() => Math.random() - 0.5);

            const creators = document.getElementById('organisers');
            const creatorsBio = document.getElementById('organisers-content');

            data.forEach((creator, index) => {
                const rowId = Math.floor(index / 4);
                if (index % 4 === 0) {
                    const creatorRow = document.createElement('div');
                    creatorRow.classList.add(`row`);
                    creatorRow.classList.add(`row-${rowId}`);
                    creators.appendChild(creatorRow);
                }

                const row = creators.querySelector(`.row-${rowId}`);

                const creatorDiv = document.createElement('div');
                creatorDiv.classList.add('col-xs-12');
                creatorDiv.classList.add('col-sm-6');
                creatorDiv.classList.add('col-md-3');

                creatorDiv.innerHTML = `
                    <div class="lgx-single-speaker2 lgx-single-speaker3">
                        <figure>
                            <a class="profile-img" href="#${creator.key}"><img
                                    src="/assets/img/people/${creator.filename}"
                                    alt="Judge"/></a>
                            <figcaption>
                                <div class="speaker-info">
                                    <h3 class="title"><a>${creator.name}</a></h3>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                `;

                row.appendChild(creatorDiv);

                const creatorBioDiv = document.createElement('div');

                creatorBioDiv.innerHTML = `
                    <div class="row" id=${creator.key}>
                        <div class="col-lg-3">
                            <figure>
                                <img src="/assets/img/people/${creator.filename}" alt="Judge">
                            </figure>
                        </div>
                        <div class="col-lg-9">
                            <h2>${creator.name}</h2>
                            <p>${creator.bio}</p>
                        </div>
                    </div>
                `;

                creatorsBio.appendChild(creatorBioDiv);

            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});