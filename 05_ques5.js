let package=("standard","express","overnight")
switch(package)
{
    case "standard":
        console.log("Might take 3-5 days");
        break;
    case "express":
        console.log("Might take 1-2 days");
        break;
    case "overnight":
        console.log("Would be delivered the next day");
        break;
    default:
        break;
}