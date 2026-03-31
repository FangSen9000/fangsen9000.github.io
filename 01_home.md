<!-- Teaser Section with Text Wall -->
<section id="teaser" class="teaser-section">
    <div class="photo-container">
        <img src="file/senfang_photo_2025-8-short.jpg" alt="photo_senfang" />
    </div>
    <div class="text-wall-container">
        <div class="text-wall-background">
                Requirements for implementing an ideal world model: 1. Encode all information to the boundary. 2. Conform to conformal symmetry. Follow this rule, flattens the world into a two-dimensional space, and visual generation is almost lossless world generation.
                Definition of an ideal world model: 1. Spatial sequence 2. Time sequence 3. Dense representation 4. Semantic instances 5. World core 6. Physical constraint 7. RIVE, Reasonable, Interpretable, Visualizable, and Editable. 8. Bidirectional training and inference 9. All living animals have posture information.
                The method to make vision models understand physics is to create a core space and implement constraints within it.
                Ideal world models possess conformal symmetry, e.g., representing data positions as "relative positions", allowing the core space to have tremendous freedom and robustness. Eg, this can solve the fixed resolution problem in ViT and aligns with human intuition.
                Adding high-dimensional features/the complexity of the latent space manifold itself (using WSG), and reducing the actual distribution of the latent space (based on flow models or physically consistent data) all contribute to semantic consistency.
                The key to the wave-based model is using waves to record spatial information to create multi-perspective consistency, human id consistency and behavior consistency.
                The coordinates of a moving camera are one of the key pieces of information that help the model understand the world. Observing the world while moving is like querying a high-dimensional manifold, similar to how Earth is a sphere rather than a flat plane. Conventional generative models are equivalent to generating from a fixed perspective.
                The principle of least action is the underlying principle of the world and can explain all known physical systems. Therefore, as long as we conform to the principle of least action, we hold the key to making models understand physics.
                The breaking and merging of waves can represent a cup shattering or cars colliding, representing moments of sudden change in otherwise smoothly evolving systems. This is the final mile that visual models need to complete.
                WaveGen is a type of wave-based model that, just as waves on the surface are driven by ocean currents below, is based on flow models. The World Snapshot Model is an ideal world model implemented through WaveGen. ControlWave utilizes the data characteristics of the world model itself to control the world.
                All the pixels of our work exhibit wave-particle duality. In the field of world snapshots, waves represent reconstruction, time-space, order and existence, while particles represent generation, rendering, understanding and cognition.
                In Computer Vision before WSM be proposed, all estimation tasks can be regarded as deriving WSG from images, all conditional generation tasks can be seen as generating WSG with fixed partial results, and all reconstruction tasks can be considered as obtaining WSG sets through known images.
                The latent space of WaveGen has the characteristics of being Reasonable, Interpretable, Visualizable, and Editable. Unlike all the previous works: the parameter latent space of previous models only has the simplest I/O interface.
        </div>
        <a href="https://world-snapshot.github.io/doc/index.html?page=S6_materials/02_guideline.md#tldr-of-project-page" class="text-wall-triangle" target="_blank">▼</a>
        <div class="name-outline">
            <span>Sen Fang</span>
        </div>
    </div>
</section>

I'm **Sen Fang**, a second-year Ph.D. student at [Rutgers University](https://en.wikipedia.org/wiki/Rutgers_University), supervised by [Prof. Dimitris Metaxas](https://people.cs.rutgers.edu/~dnm/). I proposed [Unified Law for Visual Tasks](https://github.com/World-Snapshot/Unified-Law-for-Visual-Tasks) (The Four Laws of Computer Vision), and I am the author of [World Snapshot Model](https://world-snapshot.github.io), which have further advanced the progress of Machine Learning, mainly in terms of computer vision concepts. Before this, I had an internship or collaboration at <img src="logo/apisix.png" class="inline-logo">[Apache](https://github.com/apache), <img src="logo/NTU.png" class="inline-logo">[NTU](https://www.ntu.edu.sg/), <img src="logo/nus_short.png" class="inline-logo">[NUS](https://www.nus.edu.sg/), <img src="logo/utd.png" class="inline-logo">[UTD](https://www.utdallas.edu/), <img src="logo/UCF.svg.png" class="inline-logo">[UCF](https://www.ucf.edu), <img src="logo/hedra.svg" class="inline-logo">[Hedra](https://www.hedra.com/) successively. I obtained a double CS B.S. degree in 2024.

My main research field is **Computer Vision**. My research interest covers **Multimodal** ([100+ \% multimodal fusion](https://github.com/World-Snapshot/100-percent-multimodal-fusion)<sup class="footnote" data-note="I think: If we label a 123to321 type modal transformation model that has fully utilized all its neurons as having a 100% multi-modal fusion degree, then the method of recovering multiple modalities from a single modality (1to123) is what we need to consider next. Ensuring that the temporal and spatial correspondences are consistent when reading the dataset can further enhance the potential. Therefore, WSG theoretically has the potential to surpass the upper limit of existing models (if we define the upper limit of existing models as 100%).">1</sup>, Audio-Visual, Study the Essence of different Modal Representations), **AIGC** (AI-generated content, Multi-view learning, NeRF/3D), **Self-Supervised** Learning (Pose recognition and modeling, object & action detection/recognition in videos, Image Analysis) and **VR/AR/DCG** and **Visual Perception** (Modeling Digital Reality, including human and dynamic scene).


Recently I have been interested in the following topics:
- <strong><font color='green'>World Snapshot</font></strong> - This is the research field I have pioneered (including full CV + the parts of NLP/Audio), which has expanded the boundaries of computer vision. The main focus/goal is on integrating thousands of generation/understanding/reconstruction/estimation CV tasks into a single model, just like how LLMs have contributed to NLP<sup class="footnote" data-note="More specifically, computer vision should have an emperor-level model, similar to the status of LLM in NLP: We shall hope previous visual models have been completely replaced by WSMs, and it is hoped that WSMs should receive far more citations than LLMs. After all, the field of computer vision is much larger than NLP, and it has always been a top-level research area. However, it was a little late in giving birth to the next generation of models because images are more difficult to train than text.">2</sup>. It involves the definition of the model, training, and processing of new data formats. It is a long-term project dedicated to realizing the ideal world model.
<!--
- <strong><font color='green'>Wave Generative Method</font></strong> - The conceptual new generation mechanism I have designed<sup class="footnote" data-note="It is mainly based on RF and parametric expression of mathematical primitives.">3</sup>. It aims to use mathematical functions to losslessly record dynamic 3D shapes, fundamentally reducing the generated string/values while maintaining the same expression ability. It is dedicated to achieving some new features that was not well accomplished by previous methods<sup class="footnote" data-note="Up until when I proposed WaveGen: 1. Some work could achieve these features to a very slight extent, but no systematic methodology could be proposed. 2. Consistency was done relatively well, but at a high cost. While WaveGen proposed three methods to enhance consistency. Most existing methods only follow one approach and are not implemented in a concise manner. Or to put it simply, the previous models basically did not have these new features that I added. These features (except for consistency) are almost unique to the Wave Model.">4</sup>: like variable FPS, variable resolution, causality, physics, consistency, training the world itself, predicting the future/past, synchronizing the real world with model's core space, and pixel-level control of the world distribution, etc. With unlimited duration, native 3D+t has already seen many other solutions, so it is not worth mentioning.
-->
- <strong><font color='green'>Sign Language</font></strong> - It involves many fields, such as the conversion between text/audio and movement/gestures, human body reconstruction and recognition, human pose synchronization, Pose-guided image generation, avatar reconstruction, and style transfer, etc. This topic has high technical requirements, and you must achieve a high level in all the above fields before it can be applied to sign language datasets.

I am open to academic/industrial collaborations, and please drop me an email if you are interested in collaborating with me. I plan to apply for the Intern position related to WSMs and WaveGen at 26 Summer.

[Github](https://github.com/fangsen9000/) | [X/Twitter](https://twitter.com/SenFang01)<sup class="footnote" data-note="Paper Promotion">o</sup> | [Threads](https://www.threads.com/@senfang01)<sup class="footnote" data-note="Academic Thinking">o</sup> | [LinkedIn](https://www.linkedin.com/in/fangsen/)<sup class="footnote" data-note="General Contact Information">o</sup> | Email: fangsen2024 [at] gmail [dot] com

*last updated: 2026-01-16*

## News

<p style="background: #f0f4f8; border: 1px solid #cbd5e0; padding: 15px; border-radius: 6px; margin: 20px 0; color: #4a5568;">I no longer engage in purely NLP research without visual elements. The emperor model in the computer vision field has already been developed. Computer Vision Researchers have their own more important / stronger research.
</p>



<div class="tabs"><span class="tab active" onclick="document.getElementById('selected-news').classList.add('active');document.getElementById('all-news').classList.remove('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Selected</span>&#8204;<span class="tab" onclick="document.getElementById('all-news').classList.add('active');document.getElementById('selected-news').classList.remove('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">All</span></div>

<div id="selected-news" class="tab-content news active">

- **2025.3** According to the plan from a year ago, I will join [Hedra Inc.](https://www.hedra.com/) to research foundational video generation models.
- **2024.12** An amazing day. Maybe I was inspired by God, or maybe I found my lifelong career.
- **2024.6** I got the [Best Bachelor's Thesis](https://jwc.henu.edu.cn/info/2145/8713.htm) award of [Henan University](https://en.wikipedia.org/wiki/Henan_University).
- **2024.2** I have received the offer of dream advisor and will start my doctoral career.

</div>

<div id="all-news" class="tab-content news">

- **2025.9** One app was accepted by [<span style="color:rgb(204,0,0);">ICCV Demo Track</span>](https://iccv.thecvf.com/Conferences/2025/CallForDemos).
- **2025.7** One paper was accepted by [<span style="color:rgb(204,0,0);">ICCV CV4A11y</span>](https://cv4a11y.github.io/ICCV2025/index.html).
- **2025.4** One paper was accepted by [<span style="color:rgb(204,0,0);">IEEE FG FM&LLM&GM</span>](https://sites.google.com/view/fmllmgm-fg25).
- **2025.3** According to the plan from a year ago, I will join [Hedra Inc.](https://www.hedra.com/) to research foundational video generation models.
- **2024.12** An amazing day. Maybe I was inspired by God, or maybe I found my lifelong career.
- **2024.6** I got the [Best Bachelor's Thesis](https://jwc.henu.edu.cn/info/2145/8713.htm) award of [Henan University](https://en.wikipedia.org/wiki/Henan_University).
- **2024.2** I have received the offer of dream advisor and will start my doctoral career.
- **2023.10** An article was accepted by [<span style="color:rgb(204,0,0);">EMNLP MRL</span>](https://sigtyp.github.io/ws2023-mrl.html).
- **2023.9** As Intern of Prof [Chen Chen](https://www.crcv.ucf.edu/chenchen/) to explore the large language model of sign language. He is a professor from UCF([<span style="color:rgb(204,0,0);">Top10 CV@CS-ranking</span>](https://csrankings.org/#/index?vision&us)), with over <span data-gscholar="https://scholar.google.com/citations?user=TuEwcZ0AAAAJ" data-gscholar-short="true">...</span> citations.
- **2023.8** One of my articles was accepted by [<span style="color:rgb(204,0,0);">ICONIP</span>](http://www.iconip2023.org/), the flagship conference of [<span style="color:rgb(204,0,0);">APNNS</span>](https://www.apnns.org/)!
- **2023.2** Started sign language production work under the guidance of Prof [Yapeng Tian](http://www.yapengtian.com/) from UTD, SPC/AC of Top-level conferences, such as [<span style="color:rgb(204,0,0);">CVPR</span>](https://cvpr.thecvf.com/)/[<span style="color:rgb(204,0,0);">AAAI</span>](https://aaai-23.aaai.org/), with over <span data-gscholar="https://scholar.google.com/citations?user=lxCqdpoAAAAJ" data-gscholar-short="true">...</span> citations.
- **2022.7** As a study researcher of Prof [TeikToe Teoh](https://github.com/teohteiktoe), joined NTU in Summer research.
- **2022.6** As a student of mentor [SkyeYoung](https://github.com/SkyeYoung), joined APISIX in [<span style="color:rgb(204,0,0);">OSPP 2022</span>](https://summer-ospp.ac.cn/), who is an Apache member of the top project with <a href="https://github.com/apache/apisix"><img src="https://img.shields.io/github/stars/apache/apisix?style=social" alt="GitHub stars" style="display:inline !important; height:1em; vertical-align:text-bottom; margin:0 !important;"></a>.
- **2022.2** Completed 2 months of Bytedance youth-camp as a team captain.
- **2021.9** Completed 2 months of ACM training.

</div>

## Selected Works

*\* Equivalent contribution, † Corresponding author. The following works is based on the most relevant tags, although they overlap with each other<sup class="footnote" data-note="sign language generation is classified as SL although it is also a posture generation method">o</sup>*       
🏆 1~3x SOTA, 💥 over 3~10x improvement / New Concept, 👑 Impacts 100+ Domains / Paradigm Shift, ♾️ Impacts 1000+ Domains / Paradigm Emperor<sup class="footnote" data-note="e.g., LLM killed 900+ NLP tasks">o</sup>   

<link rel="stylesheet" href="static/css/pub.css">

<div class="tabs"><span class="tab active" onclick="document.querySelectorAll('.pub-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('pub-featured').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Representative Works</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.pub-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('pub-generative').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Generative AI</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.pub-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('pub-sign').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Sign Language</span></div>

<div id="pub-featured" class="tab-content pub-tab-content active">
<div class="pub-container">

<div class="pub-item"><img src="cover/StreamFlow_teaser.gif"><div class="pub-content">

**WSM: World Snapshot Model**   
**Sen Fang**, Dimitris N. Metaxas†  
[[Paper]](https://arxiv.org/abs/2511.22009) [[Project Page]](https://world-snapshot.github.io/StreamFlow/) [[Code]](https://github.com/World-Snapshot) [[Document]]()   
♾️ <font color='green'>**Order-of-magnitude width + Concept breakthrough:** Propose [WSM](https://github.com/World-Snapshot/StreamFlow) and [Unified Law for Visual Tasks](https://github.com/World-Snapshot/Unified-Law-for-Visual-Tasks) (The Four Laws of Computer Vision), which supports hundreds of times more tasks than existing CV models. Theoretically, supports a maximum of up to several thousand existing tasks, and potentially 32.8k+ newly CV tasks will be created in a short time<sup class="footnote" data-note="Of course, these changes developed quietly like raindrops. LLM can do countless things, but no one has detailed its capabilities. The capabilities of WSM will not be divided either; it can perform all tasks related to vision and the world.">o</sup>.</font>

</div></div>

</div>
</div>

<div id="pub-generative" class="tab-content pub-tab-content">
<div class="pub-container">

*According to my Unified Laws, all visual tasks only require generative methods. Therefore, GenAI will be the focus of 90% of visual professionals.*

<div class="pub-item"><img src="cover/rac.png"><div class="pub-content">

**RAC: Rectified Flow Auto Coder**     
**Sen Fang**, Yalin Feng*, Yanxin Zhang, Dimitris N. Metaxas†      
[[Paper]](https://arxiv.org/abs/2511.22009) [[Project Page]](https://world-snapshot.github.io/RAC) [[Code]](https://github.com/World-Snapshot/RAC)          
💥 <font color='green'>**Concept breakthrough:** Make the reconstruction task a condition generation task; Make the decoder the encoder; Make the single-step decoding and encoding a multi-step decoding and encoding.</font>

</div></div>

<div class="pub-item"><img src="cover/StreamFlow_teaser.gif"><div class="pub-content">

**StreamFlow: Theory, Algorithm, and Implementation for High-Efficiency Rectified Flow Generation**     
**Sen Fang**, Hongbin Zhong*, Yalin Feng, Dimitris N. Metaxas†      
[[Paper]](https://arxiv.org/abs/2511.22009) [[Project Page]](https://world-snapshot.github.io/StreamFlow/) [[Code]](https://github.com/World-Snapshot/StreamFlow)          
💥 <font color='green'>**Order-of-magnitude performance breakthrough:** The generation speed of Rectified Flow has been accelerated up to 611%, while the universal training-free Flow acceleration methods during the same period only increased by 18% or 30%.</font>

</div></div>

</div>
</div>

<div id="pub-sign" class="tab-content pub-tab-content">
<div class="pub-container">

<div class="pub-item"><img src="cover/SignX2.png"><div class="pub-content">

**SignX: Continuous Sign Recognition in Compact Pose-Rich Latent Space**    
**Sen Fang**, Yalin Feng*, Chunyu Sui, Hongbin Zhong, Hongwei Yi, Dimitris N. Metaxas†      
[[Paper]](https://arxiv.org/abs/2504.16315) [[Project Page]](https://signerx.github.io/SignX/)      
🏆 <font color='green'>**Performance breakthrough:**  2026 CSLR SOTA. The recognition and understanding tasks on any sign language dataset can/will achieve state-of-the-art results.</font>

</div></div>

<div class="pub-item"><img src="cover/StableSigner.gif"><div class="pub-content">

**Stable Signer: Hierarchical Sign Language Generative Model**      
**Sen Fang**, Yalin Feng*, Hongbin Zhong, Yanxin Zhang, Dimitris N. Metaxas†        
*ICCV 2025 Demo Track*       
[[Paper]](https://arxiv.org/abs/2512.04048) [[Project Page]](https://stablesigner.github.io/) [[Data]](https://github.com/SignLLM/Prompt2Sign/tree/main/tools-new-2025)     
🏆 <font color='green'>**Significant performance breakthrough:** Outperforms contemporary state-of-the-art generation methods by 48.6%.</font>

</div></div>

<div class="pub-item"><img src="cover/SignLLM.png"><div class="pub-content">

**SignLLM: Sign Language Production Large Language Models**     
**Sen Fang**, Chen Chen†, Lei Wang, Ce Zheng, Chunyu Sui, Yapeng Tian       
*ICCVW 2025*        
[[Paper]](https://arxiv.org/abs/2405.10718) [[Project Page]](https://signllm.github.io/) [[Data]](https://signllm.github.io/Prompt2Sign)      
💥 <font color='green'>**Order-of-magnitude width breakthrough:** The single model supports the generation of 8 types of sign languages, and the number of SLP tasks it supports has increased by eight times.</font>

</div></div>

<!--
<div class="pub-item">
<img src="cover/SignDiff.png">
<div class="pub-content">

**SignDiff: Diffusion Models for American Sign Language Production**
**Sen Fang**, Chunyu Sui\*, Yanghao Zhou, Xuedong Zhang, Hongbin Zhong, Yapeng Tian†, Chen Chen†
*IEEE FG 2025 Workshop*
[[Paper]](https://arxiv.org/abs/2308.16082) [[Project Page]](https://signdiff.github.io) [[Preprocessed Data]](https://github.com/SignDiff/Processed-Data)

</div>
</div>
-->

</div>
</div>

→ [Google Scholar](https://scholar.google.com/citations?hl=en&user=BJb9MsgAAAAJ)



## Experience

<div class="tabs"><span class="tab active" onclick="document.querySelectorAll('.exp-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('exp-work').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Work Experience</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.exp-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('exp-edu').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Education</span></div>



<div id="exp-work" class="tab-content exp-tab-content active cols-2">

<!--
<table class="imgtable"><tbody><tr><td>
  <a href="https://www.microsoft.com/en-us/research/" target="_blank">
    <img src="logo/msra.png" alt="MSR" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><b>Microsoft Research  </b> <br>
  Motion Generation Intern, 3DV, Multi-Modal
  <br>
  <i>Summer, 2025 (Expected) -- Winter, 2025</i> <br>
  </p></td></tr></tbody></table>
<br>
-->
<table class="imgtable"><tbody><tr><td>
  <a href="https://www.hedra.com/" target="_blank">
    <img src="logo/hedra.svg" width="80" height="80" alt="Hedra" />
  </a></td>
  <td align="left"><p><b>Hedra Inc.  </b> <br>
  Video-Human Research Intern, GenAI 
  <br>
  Mentor: <a href="https://github.com/yhw-yhw">DR. Hongwei Yi</a>
  <br>
  <i>May, 2025 -- July, 2025</i> <br>
  </p></td></tr></tbody></table>
<br>

<table class="imgtable"><tbody><tr><td>
  <a href="https://www.ucf.edu" target="_blank">
    <img src="logo/UCF.svg.png" alt="University of Central Florida" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><b>University of Central Florida  </b> <br>
  3DV-LLM Research Assistant, Multi-Modal
  <br>
  Advisor: <a href="https://www.crcv.ucf.edu/chenchen/">Prof. Chen Chen</a>
  <br>
  <i>Sep, 2023 -- Aug, 2024</i> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="https://www.utdallas.edu/" target="_blank">
    <img src="logo/utd.png" alt="University of Texas at Dallas" height="100"/>
  </a></td>
  <td align="left"><p><b>University of Texas at Dallas  </b> <br>
  Vid2Vid Research Assistant, Multi-Modal
  <br>
  Advisor: <a href="http://www.yapengtian.com/">Prof. Yapeng Tian</a>
  <br>
  <i>Feb, 2023 -- Dec, 2023</i> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="https://www.ntu.edu.sg/index" target="_blank">
    <img src="logo/NTU.png" alt="Nanyang Technological University" height="100"/>
  </a></td>
  <td align="left"><p><b>Nanyang Technological University  </b> <br>
  Speech DL Intern, Multi-Modal
  <br>
  Advisor: <a href="https://github.com/teohteiktoe">Prof. TeikToe Teoh</a>
  <br>
  <i>Jul, 2022 -- Dec, 2022</i> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="https://api7.ai/" target="_blank">
    <img src="logo/apache-apisix.png" alt="APISIX, Top Level Project" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><b>Apache Software Foundaiton  </b> <br>
  Developer Intern, <a href="https://github.com/apache/apisix">APISIX</a>/<a href="https://api7.ai/">api7.ai</a>, <a href="https://news.apache.org/foundation/entry/the-apache-software-foundation-announces66">Top Level Project</a>
  <br>
  Mentor: <a href="https://github.com/SkyeYoung">Tao Yang</a>
  <br>
  <i>Jun, 2022 -- Nov, 2022</i> <br>
  </p></td></tr></tbody></table>

</div>

<div id="exp-edu" class="tab-content exp-tab-content cols-2">

<table class="imgtable"><tbody><tr><td>
  <a href="https://newbrunswick.rutgers.edu/" target="_blank">
    <img src="logo/RU.svg.png" alt="Rutgers University–New Brunswick" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><b>Rutgers University–New Brunswick  </b> <br>
  Ph.D., Department of Computer Science
  <br>
  Advisor: <a href="https://people.cs.rutgers.edu/~dnm/">Prof. Dimitris N. Metaxas</a>
  <br>
  New Jersey (USA)
  <br>
  <i>Sep, 2024 -- June, 2029 (Expected)</i> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="https://www.vu.edu.au/" target="_blank">
    <img src="logo/vu.png" alt="Victoria University" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><b>Victoria University  </b> <br>
  B.S., Department of Information Technology
  <br>
  Melbourne (Australia)
  <br>
  <i>Sep, 2020 -- Jun, 2024</i> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="http://www.henu.edu.cn/" target="_blank">
    <img src="logo/lighthenu.png" alt="Henan University" height="100"/>
  </a></td>
  <td align="left"><p><b>Henan University  </b> <br>
  B.S., Department of Computer Science and Technology
  <br>
  Zhengzhou (China)
  <br>
  <i>Sep, 2020 -- Jun, 2024</i>
  <br>
  </p></td></tr></tbody></table>

</div>

## Talks

- **Make an Appointment:** The quickest way to find me is to send me an email or remind me on X/Github/LinkedIn. Then we create a Google Calendar event.
- **Summary:** Amazon, Swiss Television, New Scientist, Waterloo, Dicpta Inc, Mo-Sys Inc.

*Including invitations I couldn't accept due to my busy schedule.*

## Service

- **PC Member:** IEEE FG 2026, ICONIP 2024 2026, FM&LLM&GM 2025
- **Conference Reviewer:** NeurIPS 2024, ICML 2024, ICLR 2025, ICCV 2025, WACV 2026, ACM MM 2025-2026, IEEE FG 2025, ICONIP 2023-2024, EMNLP 2023, NAACL 2024, ACL ARR 2023-2024  

## Teaching

- **Spring 2026:** [01-198-323: Numerical Analysis and Computing](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-323-numerical-analysis-and-computing)
- **Fall 2025:** [01-198-336: Principles of Information and Data Management](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management)
- **Spring 2025:** [01-198-210: Data Management for Data Science](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-210-data-management-for-data-science)
- **Fall 2024:** [01-198-352: Internet Technology](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-352-internet-technology)

## Awards

- **Best Bachelor's Thesis** in Henan University [[News]](https://jwc.henu.edu.cn/info/2145/8713.htm)  
- **School Grant:** 2020-2021, 2023-2024

<br>
<div style="width: 420px; height: 220px; overflow: hidden; margin: 20px auto;">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=DVOirx5xZoatWTrQvYVH2Jzv9fHuoX_NoHOytFe_XOo&cl=ffffff&w=a"></script>
</div>