function calcBMI ()
{
    let height = document.getElementById( "height" );
    let weight = document.getElementById( "weight" );
    height.addEventListener( 'input', calculate );
    weight.addEventListener( 'input', calculate );
    changeUnit();
}


function calculate ()
{
    const weight = parseFloat( document.getElementById( "weight" ).value );
    const height = parseFloat( document.getElementById( "height" ).value );
    const unit = document.querySelector( 'input[name="gridRadios"]:checked' ).value;
    console.log( height, unit );
    if ( isNaN( weight ) || isNaN( height ) || height <= 0 )
    {
        result.innerHTML = "Please enter valid height and weight values.";
    }
    else
    {
        let bmi;
        let status;
        if ( unit === "Metric" )
        {
            bmi = weight / Math.pow( height / 100, 2 );
            if ( bmi < 18.5 ) status = "Underweight";
            else if ( bmi >= 18.5 && bmi <= 24.9 ) status = "Normal weight";
            else if ( bmi >= 25 && bmi <= 29.9 ) status = "Overweight";
            else status = "Obese";

        } else
        {
            bmi = ( weight / Math.pow( height, 2 ) ) * 703;
        }

        result.innerHTML = `The result is: <b>${ bmi.toFixed( 2 ) }</b> , <i>${ status }</i>`;
    }
}

function changeUnit ()
{
    const unit = document.querySelectorAll( 'input[name="gridRadios"]' );
    for ( let i = 0; i < unit.length; i++ )
    {
        unit[ i ].addEventListener( 'change', () =>
        {
            if ( unit[ i ].value === "Metric" )
            {
                console.log( unit[ i ].value );
                height.placeholder = "cm";
                weight.placeholder = "kg";
                height.value = '';
                weight.value = '';
                result.innerHTML = "<h4 class='mb-3 result'>Welcome!</h4><p>Enter your height and weight and you'll see your BmI result here</p>";

            } else
            {
                console.log( unit[ i ].value );
                height.placeholder = "in";
                weight.placeholder = "lb";
                height.value = '';
                weight.value = '';
                result.innerHTML = "<h4 class='mb-3 result'>Welcome!</h4><p>Enter your height and weight and you'll see your BmI result here</p>";

            }
        } );
    }
}

calcBMI();

const text = "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'Maintaining a healthy weight may lower your chance of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally. strive for regular physical activity. ideally about 30 minutes daily for five days a week.";
const text2 = "Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.";
const speed = 30;
let i = 0;
let j = 0;

function typeWriterText1 ()
{
    if ( i < text.length )
    {
        document.getElementById( "text" ).innerHTML += text.charAt( i );
        i++;
        setTimeout( typeWriterText1, speed );
    }
}

function typeWriterText2 ()
{
    if ( j < text2.length )
    {
        document.getElementById( "text2" ).innerHTML += text2.charAt( j );
        j++;
        setTimeout( typeWriterText2, speed );
    }
}


typeWriterText1();
typeWriterText2();