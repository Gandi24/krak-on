// Load data from a JSON larps and display it on the page
document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/data/larps.json')
        .then(response => response.json())
        .then(data => {
            const friday2 = document.getElementById('scheduleFriday2');
            const saturday1 = document.getElementById('scheduleSaturday1');
            const saturday2 = document.getElementById('scheduleSaturday2');
            const sunday1 = document.getElementById('scheduleSunday1');

            data.forEach(larp => {
                const larpDiv = document.createElement('div');
                larpDiv.classList.add('panel-group');
                larpDiv.id = larp.key;
                larpDiv.setAttribute('role', 'tablist');
                larpDiv.setAttribute('aria-multiselectable', 'true');

                larpDiv.innerHTML = `
                    <div class="panel panel-default lgx-panel">
                        <div class="panel-heading" role="tab" id="heading${larp.key}">
                            <div class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#${larp.key}"
                                   href="#collapse${larp.key}" aria-expanded="true"
                                   aria-controls="collapse${larp.key}">
                                    <div class="lgx-single-schedule">
                                        <div class="author">
                                            <img src="assets/img/games/${larp.key}.png"
                                                 alt="Speaker"/>
                                        </div>
                                        <div class="schedule-info">
                                            <h4 class="time">${larp.length}</h4>
                                            <h3 class="title">${larp.title}</h3>
                                            <h4 class="author-info">MG: <span>${larp.author}</span></h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="collapse${larp.key}" class="panel-collapse collapse out"
                             role="tabpanel"
                             aria-labelledby="heading${larp.key}">
                            <div class="panel-body">
                                <p class="text">
                                    ${larp.description}
                                </p>
                                <!-- <h4 class="location"><strong>Sala:</strong> 3 Kominkowa </h4>-->
                            </div>
                        </div>
                    </div>
                `;

                switch (larp.slot) {
                    case 'friday2':
                        friday2.appendChild(larpDiv);
                        break;
                    case 'saturday1':
                        saturday1.appendChild(larpDiv);
                        break;
                    case 'saturday2':
                        saturday2.appendChild(larpDiv);
                        break;
                    case 'sunday1':
                        sunday1.appendChild(larpDiv);
                        break;
                    default:
                        console.error(`Invalid day: ${larp.day}`);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


// Load data from a JSON larps and display it on the page
document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/data/creators.json')
        .then(response => response.json())
        .then(data => {
            const creators = document.getElementById('creators');

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
                                    <h4 class="subtitle">${creator.larp}</h4>
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