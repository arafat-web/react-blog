import React from 'react';
function Hero() {
    return(
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 fw-bold lh-1">Welcome to My Daily Life Blog</h1>
                    <p class="lead"> Id officia culpa occaecat ipsum ipsum aliqua sunt ea elit excepteur. </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                    <img class="rounded-lg-3" src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" alt="" width="720" />
                </div>
            </div>
        </div>
    )
}
export default Hero;