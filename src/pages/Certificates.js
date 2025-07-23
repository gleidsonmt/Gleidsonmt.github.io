import dayjs from "dayjs";

const certficates = [
    {
        name: "Javascript Algorithms and Data Structures",
        from: "freeCodeCamp",
        finishedAt: dayjs("2025-06-21").format("YYYY-MM-DD"),
        img: "certifcado_javascript_algorithms_and_data_sctructures.png",
        link: "https://www.freecodecamp.org/certification/fccdea68468-112f-4c80-8d61-d487830519a3/javascript-algorithms-and-data-structures-v8",
    },
    {
        name: "Responsive Web Design",
        from: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/fccdea68468-112f-4c80-8d61-d487830519a3/responsive-web-design",
        finishedAt: dayjs("2023-03-17").format("YYYY-MM-DD"),
        img: "certificado_responsive_web_design.png",
    },
    {
        name: "Front End Development",
        from: "freeCodeCamp",
        link: "https://www.freecodecamp.org/certification/fccdea68468-112f-4c80-8d61-d487830519a3/front-end-development-libraries",
        img: "certificado_front_end_development.png",
        finishedAt: dayjs("2025-06-20").format("YYYY-MM-DD"),
    }
];

export default certficates;