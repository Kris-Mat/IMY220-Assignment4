$(document).ready(function () {

    var inputString = $("textarea#message").val();
    var input = inputString;

    jQuery('#left').on('click', function () {

        var inputString = $("textarea#message").val();
        var input = inputString;

        if (input != "") {

            //Regex for youtube links:
            var youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|watch\?v=|watch\?feature=player_embedded&v=|embed%2Fvideoseries%2F|embed\?feature=player_embedded&v=)([^#\&\?\s]*).*/g;

            // we could use match to find matches in the string with the regex i found
            var match;

            if ((match = youtubeRegex.exec(input)) !== null) {
                //there was an example of using "exec" on a regex string that returned an array of the results from a comparioson with with the regex string so lets hope this works in this case
                // console.log("this works");

                //from the array returned, there should only one match so we can just say match[1] to get the youtube link
                //for some reason, match[0] didn't work, please remember why
                var id = match[1];

                //getting  the input text came before and after the youtube video link
                var beginning = input.substring(0, match.index);
                var youtubeLink = "https://www.youtube.com/embed/" + id;

                // creating an iframe for the youtube video link, will add it in later
                var iframe = $("<iframe>").attr({
                    src: youtubeLink,
                    frameborder: 0, // i don't think we need a border around the video 
                    allowfullscreen: true // i see youtube has a fullscreen mode options, so lets home this works 
                }).css({
                    width: "100%", //going to be the widh of the iframe, must be 100% of the column
                    height: "315px"
                });

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#CBC3E3", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            }).append(
                                jQuery('<p></p>', {
                                    html: beginning,
                                }),
                                jQuery('<div></div>', {
                                    html: youtubeLink,
                                }),
                                iframe
                            )
                        )
                )
            }
            else {

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                html: input,
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#CBC3E3", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            })
                        )
                )
            }
        }

        $('textarea#message').val('');
    });

    jQuery('#right').on('click', function () {

        var inputString = $("textarea#message").val();
        var input = inputString;

        if (input != "") {

            //Regex for youtube links:
            var youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|u\/\w\/|watch\?v=|watch\?feature=player_embedded&v=|embed%2Fvideoseries%2F|embed\?feature=player_embedded&v=)([^#\&\?\s]*).*/g;

            // we could use match to find matches in the string with the regex i found
            var match;

            if ((match = youtubeRegex.exec(input)) !== null) {
                //there was an example of using "exec" on a regex string that returned an array of the results from a comparioson with with the regex string so lets hope this works in this case
                // console.log("this works");

                //from the array returned, there should only one match so we can just say match[1] to get the youtube link
                //for some reason, match[0] didn't work, please remember why
                var id = match[1];

                //getting  the input text came before and after the youtube video link
                var beginning = input.substring(0, match.index);
                var youtubeLink = "https://www.youtube.com/embed/" + id;

                // creating an iframe for the youtube video link, will add it in later
                var iframe = $("<iframe>").attr({
                    src: youtubeLink,
                    frameborder: 0, // i don't think we need a border around the video 
                    allowfullscreen: true // i see youtube has a fullscreen mode options, so lets home this works 
                }).css({
                    width: "100%", //going to be the widh of the iframe, must be 100% of the column
                    height: "315px"
                });

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#EAFFF1", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            }).append(
                                jQuery('<p></p>', {
                                    html: beginning,
                                }),
                                jQuery('<div></div>', {
                                    html: youtubeLink,
                                }),
                                iframe
                            )
                        )
                )
            }
            else {

                jQuery('div.messages').append(
                    jQuery('<div></div>', {
                        class: 'row'
                    })
                        .append(
                            jQuery('<div></div>', {
                                html: input,
                                class: 'col-4 offset-4',
                            }).css({
                                "backgroundColor": "#EAFFF1", "color": "black", "margin-bottom": "20px", "border-radius": "5px"
                            })
                        )
                )
            }
        }

        $('textarea#message').val('');
    });
});





