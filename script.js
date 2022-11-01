let str = `- youtube johnny m lost in the middle of nowhere

  Lost In The Middle Of Nowhere | 2017 Progressive House Mix

- youtube johnny m serenity

  Johnny M - Serenity | 2022 Deep Progressive House Set

- youtube johnny m simply deep

  Simply Deep | 2017 Mixed By Johnny M - YouTube

- youtube johnny m diving to deep

  Deep House Set | Winter 2017 Mixed By Johnny M - YouTube

- youtube Night Sounds 18 Dub Techno

  Night Sounds 18 Dub Techno (TRACKLIST) - YouTube

- youtube Night Sounds 16 Dub Techno

  Night Sounds 16 Dub Techno (TRACKLIST) - YouTube

- 2018 Deep Progressive House Set Mixed By Johnny M

  2018 Deep Progressive House Set | Mixed By Johnny M

- youtube anjunabeats 03

  Anjunabeats: Vol. 3 (Mixed By Above & Beyond - YouTube

- youtube anjunabeats: vol. 04

 Anjunabeats: Vol. 4 (Mixed By Above & Beyond - YouTube

______________________________________________________________________________
- youtube in search of sunrise 5

  Tiësto ‎– In Search Of Sunrise 5: Los Angeles [Disc 1] - YouTube

  1:17:40

  Tiësto ‎– In Search Of Sunrise 5: Los Angeles [Disc 2] - YouTube

  1:17:47

_______________________________________________________________________________
- youtube markus schulz ibiza 06 part 1

  Markus Schulz - Ibiza '06 part 1 - YouTube

  1:18:17

- youtube markus schulz ibiza 06 part 2

  Markus Schulz - Ibiza '06 part 2 - YouTube

  1:17:22
__________________________________________________________________________
- youtube markus schulz amsterdam '08 part 1

  Markus Schulz - Amsterdam '08 part 1 - YouTube

- youtube markus schulz amsterdam '08 part 2

  Markus Schulz - Amsterdam '08 part 2 - YouTube
_______________________________________________________________________________
- youtube "the angels are with us christian monique remix"

  The Angels Are With Us (Christian Monique Remix) - YouTube

  Ricardo Piedra - Topic

- youtube "matter & universal harmonics acacia original mix"

  Matter & Universal Harmonics - Acacia (Original Mix ...

  Progressive House Worldwide
`

let output = document.getElementById("output")
let splitted = str.split("\n")

console.log(splitted)

let processed = splitted.join("</br>")

output.innerHTML = processed
