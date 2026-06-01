<!-- Teaser Section with Text Wall -->
<section id="teaser" class="teaser-section">
    <div class="photo-container">
        <img src="file/senfang_orange_big_jacket_midcamera_stable.png" alt="photo_senfang" />
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

I'm **Sen Fang**, a third-year Ph.D. student at [Rutgers University](https://en.wikipedia.org/wiki/Rutgers_University), supervised by [Prof. Dimitris Metaxas](https://people.cs.rutgers.edu/~dnm/)<fn>Board of Governors and Distinguished Prof. Dimitris Metaxas; IEEE Fellow, Fellow AIMBE, Fellow MICCAI Society</fn>. I proposed [Unified Law for Visual Tasks](https://github.com/World-Snapshot/Unified-Law-for-Visual-Tasks) (<span class="special-accent">"The Four Laws of Computer Vision"</span>), and I am the author of [World Snapshot Model](https://world-snapshot.github.io), which have further advanced the progress of whole Computer Vision concepts.
Before this, I was nominated for the <span class="special-accent">ACL 2026 Best Paper Award</span>, I had an internship or collaboration at <img src="logo/apache-apisix.png" class="inline-logo">[Apache](https://github.com/apache), <img src="logo/NTU.png" class="inline-logo">[NTU](https://www.ntu.edu.sg/), <img src="logo/nus_short.png" class="inline-logo">[NUS](https://www.nus.edu.sg/), <img src="logo/utd.png" class="inline-logo">[UTD](https://www.utdallas.edu/), <img src="logo/UCF.svg.png" class="inline-logo">[UCF](https://www.ucf.edu), <img src="logo/hedra.svg" class="inline-logo">[Hedra](https://www.hedra.com/) successively. I obtained a double CS B.S. degree in 2024.

My main research field is **Computer Vision** (3DV, Generative Method, Human Pose). 
Recently I have been interested in the following topics:
- <strong><font color='green'>World Snapshot</font></strong> - This is the research field I have pioneered (including full CV + the parts of NLP/Audio), which has expanded the boundaries of computer vision. The main focus/goal is on integrating thousands of generation/understanding/reconstruction/estimation CV tasks into a single model, just like how LLMs have contributed to NLP<fn>More specifically, computer vision should have an emperor-level model, similar to the status of LLM in NLP: We shall hope previous visual models have been completely replaced by WSMs, and it is hoped that WSMs should receive far more citations than LLMs. After all, the field of computer vision is much larger than NLP, and it has always been a top-level research area. However, it was a little late in giving birth to the next generation of models because images are more difficult to train than text.</fn>. It involves the definition of the model, training, and processing of new data formats. It is a long-term project dedicated to realizing the ideal world model.
<!--
- <strong><font color='green'>Wave Generative Method</font></strong> - The conceptual new generation mechanism I have designed<fn>It is mainly based on RF and parametric expression of mathematical primitives.</fn>. It aims to use mathematical functions to losslessly record dynamic 3D shapes, fundamentally reducing the generated string/values while maintaining the same expression ability. It is dedicated to achieving some new features that was not well accomplished by previous methods<fn>Up until when I proposed WaveGen: 1. Some work could achieve these features to a very slight extent, but no systematic methodology could be proposed. 2. Consistency was done relatively well, but at a high cost. While WaveGen proposed three methods to enhance consistency. Most existing methods only follow one approach and are not implemented in a concise manner. Or to put it simply, the previous models basically did not have these new features that I added. These features (except for consistency) are almost unique to the Wave Model.</fn>: like variable FPS, variable resolution, causality, physics, consistency, training the world itself, predicting the future/past, synchronizing the real world with model's core space, and pixel-level control of the world distribution, etc. With unlimited duration, native 3D+t has already seen many other solutions, so it is not worth mentioning.
-->
- <strong><font color='green'>Sign Language</font></strong> - It involves many fields, such as the conversion between text/audio and movement/gestures, human body reconstruction and recognition, human pose synchronization, Pose-guided image generation, avatar reconstruction, and style transfer, etc. This topic has high technical requirements, and you must achieve a high level in all the above fields before it can be applied to sign language datasets.

I am open to academic/industrial collaborations, and please drop me an email if you are interested in collaborating with me (see my <a href="#" onclick="event.preventDefault();document.querySelectorAll('.nav-page').forEach(l=>l.classList.remove('active'));document.querySelector('[data-page=\'04_blog.md\']').classList.add('active');loadMarkdownFile('04_blog.md').then(()=>{const el=document.getElementById('research-interests');if(el)el.scrollIntoView({behavior:'smooth'});})">full interests</a>). I plan to apply for the Intern position related to World Snapshot at 27 Summer and then enter the full-time job market.

<p class="icon-links" style="font-size:2em;line-height:1.8;color:purple;margin:0;"><a href="https://github.com/fangsen9000/"><i class="fa-brands fa-github"></i></a><span class="icon-sep"></span><a href="https://huggingface.co/FangSen9000/activity/all" aria-label="Hugging Face"><span style="display:inline-block;height:1em;width:1em;vertical-align:-0.15em;background-color:currentColor;-webkit-mask:url(logo/huggingface-monochrome.svg) no-repeat center/contain;mask:url(logo/huggingface-monochrome.svg) no-repeat center/contain;"></span></a><span class="icon-sep"></span><a href="https://twitter.com/SenFang01"><i class="fa-brands fa-x-twitter"></i></a><fn>Paper Promotion</fn><span class="icon-sep"></span><a href="https://www.threads.com/@senfang01"><i class="fa-brands fa-threads"></i></a><fn>Academic Thinking</fn><span class="icon-sep"></span><a href="https://www.linkedin.com/in/fangsen/"><i class="fa-brands fa-linkedin"></i></a><fn>General Contact Information</fn><span class="icon-sep"></span><a href="https://www.xiaohongshu.com/user/profile/671ed236000000000d026aad"><span style="display:inline-block;height:1em;width:1em;vertical-align:-0.15em;background-color:currentColor;-webkit-mask:url(logo/xiaohongshu.svg) no-repeat center/contain;mask:url(logo/xiaohongshu.svg) no-repeat center/contain;"></span></a><span class="icon-sep"></span><a href="mailto:fangsen2024@gmail.com"><i class="fa-solid fa-envelope"></i></a></p>

*last updated: 2026-03-31*

## News

<div class="tabs"><span class="tab active" onclick="document.getElementById('selected-news').classList.add('active');document.getElementById('all-news').classList.remove('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Selected</span>&#8204;<span class="tab" onclick="document.getElementById('all-news').classList.add('active');document.getElementById('selected-news').classList.remove('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">All</span></div>

<div id="selected-news" class="tab-content news active">

- **2026.4** One paper was accepted by <a href="https://icml.cc/Conferences/2026" class="venue-accent">ICML 2026</a>.
- **2026.4** One paper was accepted and nominated as the <span class="special-accent">Best Paper Award</span> by <a href="https://2026.aclweb.org/" class="venue-accent">ACL 2026 Main Conference</a>.
- **2025.3** According to the plan from a year ago, I will join [Hedra Inc.](https://www.hedra.com/) to research foundational video generation models.
- **2024.12** An amazing day. Maybe I was inspired by God, or maybe I found my lifelong career.
- **2024.6** I got the [Best Bachelor's Thesis](https://jwc.henu.edu.cn/info/2145/8713.htm) award of [Henan University](https://en.wikipedia.org/wiki/Henan_University).
- **2024.2** I have received the offer of dream advisor and will start my doctoral career.

</div>

<div id="all-news" class="tab-content news">

- **2026.4** One paper was accepted by <a href="https://icml.cc/Conferences/2026" class="venue-accent">ICML 2026</a>.
- **2026.4** One paper was accepted and nominated as the <span class="special-accent">Best Paper Award</span> by <a href="https://2026.aclweb.org/" class="venue-accent">ACL 2026 Main Conference</a>.
- **2025.9** One app was accepted by <a href="https://iccv.thecvf.com/Conferences/2025/CallForDemos" class="venue-accent">ICCV 2025 Demo Track</a>.
- **2025.7** One paper was accepted by <a href="https://cv4a11y.github.io/ICCV2025/index.html" class="venue-accent">ICCV 2025 CV4A11y</a>.
- **2025.4** One paper was accepted by <a href="https://sites.google.com/view/fmllmgm-fg25" class="venue-accent">IEEE 2025 FG FM&LLM&GM</a>.
- **2025.3** According to the plan from a year ago, I will join [Hedra Inc.](https://www.hedra.com/) to research foundational video generation models.
- **2024.12** An amazing day. Maybe I was inspired by God, or maybe I found my lifelong career.
- **2024.6** I got the [Best Bachelor's Thesis](https://jwc.henu.edu.cn/info/2145/8713.htm) award of [Henan University](https://en.wikipedia.org/wiki/Henan_University).
- **2024.2** I have received the offer of dream advisor and will start my doctoral career.
<!--
- **2023.10** An article was accepted by <a href="https://sigtyp.github.io/ws2023-mrl.html" class="venue-accent">EMNLP MRL</a>.
- **2023.9** As Intern of Prof [Chen Chen](https://www.crcv.ucf.edu/chenchen/) to explore the large language model of sign language. He is a professor from UCF(<a href="https://csrankings.org/#/index?vision&us" class="venue-accent">Top10 CV@CS-ranking</a>), with over <span data-gscholar="https://scholar.google.com/citations?user=TuEwcZ0AAAAJ" data-gscholar-short="true">...</span> citations.
- **2023.8** One of my articles was accepted by <a href="http://www.iconip2023.org/" class="venue-accent">ICONIP</a>, the flagship conference of <a href="https://www.apnns.org/" class="venue-accent">APNNS</a>!
- **2023.2** Started sign language production work under the guidance of Prof [Yapeng Tian](http://www.yapengtian.com/) from UTD, SPC/AC of Top-level conferences, such as <a href="https://cvpr.thecvf.com/" class="venue-accent">CVPR</a>/<a href="https://aaai-23.aaai.org/" class="venue-accent">AAAI</a>, with over <span data-gscholar="https://scholar.google.com/citations?user=lxCqdpoAAAAJ" data-gscholar-short="true">...</span> citations.
- **2022.7** As a study researcher of Prof [TeikToe Teoh](https://github.com/teohteiktoe), joined NTU in Summer research.
- **2022.6** As a student of mentor [SkyeYoung](https://github.com/SkyeYoung), joined APISIX in <a href="https://summer-ospp.ac.cn/" class="venue-accent">OSPP 2022</a>, who is an Apache member of the top project with <a href="https://github.com/apache/apisix"><img src="https://img.shields.io/github/stars/apache/apisix?style=social" alt="GitHub stars" style="display:inline !important; height:1em; vertical-align:text-bottom; margin:0 !important;"></a>.
- **2022.2** Completed 2 months of Bytedance youth-camp as a team captain.
- **2021.9** Completed 2 months of ACM training.
-->

</div>

## Selected Works

*\* Equivalent contribution, † Corresponding author. The following works is based on the most relevant tags, although they overlap with each other<fn>sign language generation is classified as SL although it is also a posture generation method</fn>*       
💥 1~3x SOTA, 🦄 over 3~10x SOTA / New Concept, 🐉 Impacts 100+ Domains / Paradigm Shift, ♾️ Impacts 1000+ Domains / Paradigm Emperor<fn>e.g., LLM killed 900+ NLP tasks</fn>   
🏆 Paper Award

<link rel="stylesheet" href="static/css/pub.css">

<div class="tabs"><span class="tab active" onclick="document.querySelectorAll('.pub-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('pub-featured').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Representative Works</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.pub-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('pub-generative').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Generative AI</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.pub-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('pub-sign').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Sign Language</span></div>

<div id="pub-featured" class="tab-content pub-tab-content active">
<div class="pub-container">

<div class="pub-item pub-image-auto-height-false"><img src="cover/StreamFlow_teaser.gif"><div class="pub-content">

**Unified Law for Visual Tasks (The Four Laws of Computer Vision)**   
**Sen Fang**, Dimitris N. Metaxas†  
[[Paper]](https://arxiv.org/abs/2511.22009) [[Project Page]](https://world-snapshot.github.io/StreamFlow/) [[Code]](https://github.com/World-Snapshot) [[Document]]()   
♾️ <font color='green'>**Order-of-magnitude width + Concept breakthrough:** Propose [WSM](https://github.com/World-Snapshot/StreamFlow) and [Unified Law for Visual Tasks](https://github.com/World-Snapshot/Unified-Law-for-Visual-Tasks) (The Four Laws of Computer Vision), which supports hundreds of times more tasks than existing CV models. Theoretically, supports a maximum of up to several thousand existing tasks, and potentially 32.8k+ newly CV tasks will be created in a short time<fn>Of course, these changes developed quietly like raindrops. LLM can do countless things, but no one has detailed its capabilities. The capabilities of WSM will not be divided either; it can perform all tasks related to vision and the world.</fn>.</font>    
**Note:** My first child, it will be remembered by history.

</div></div>

<div class="pub-item pub-image-auto-height-true"><img src="cover/StableSigner_v2.gif"><div class="pub-content">

**Stable Signer: Hierarchical Sign Language Generative Model**      
**Sen Fang**, Yalin Feng*, Hongbin Zhong, Yanxin Zhang, Dimitris N. Metaxas†        
<span class="venue-accent">ICCV 2025 Demo Track</span> and <span class="venue-accent">ACL 2026 Main Conference (Oral)</span>       
<span class="venue-accent">ACL 2026 Best Paper Award Nominee (out of 12,148 submissions)</span>       
[[Paper]](https://arxiv.org/abs/2512.04048) [[Project Page]](https://stablesigner.github.io/) [[Data]](https://github.com/SignLLM/Prompt2Sign/tree/main/tools-new-2025)     
🏆 <font color='green'>**Significant performance breakthrough:** Outperforms contemporary state-of-the-art generation methods by 48.6%.</font>

</div></div>

</div>
</div>

<div id="pub-generative" class="tab-content pub-tab-content">
<div class="pub-container">

*According to my Unified Laws, all visual tasks only require generative methods. Therefore, GenAI will be the focus of 90% of visual professionals.*

<div class="pub-item pub-image-auto-height-false"><img src="cover/rac.png"><div class="pub-content">

**RAC: Rectified Flow Auto Coder**     
**Sen Fang**, Yalin Feng*, Yanxin Zhang, Dimitris N. Metaxas†      
[[Paper]](https://arxiv.org/abs/2511.22009) [[Project Page]](https://world-snapshot.github.io/RAC) [[Code]](https://github.com/World-Snapshot/RAC)          
🦄 <font color='green'>**Concept breakthrough:** Make the reconstruction task a condition generation task; Make the decoder the encoder; Make the single-step decoding and encoding a multi-step decoding and encoding.</font>

</div></div>

<div class="pub-item pub-image-auto-height-false"><img src="cover/StreamFlow_teaser.gif"><div class="pub-content">

**StreamFlow: Theory, Algorithm, and Implementation for High-Efficiency Rectified Flow Generation**     
**Sen Fang**, Hongbin Zhong*, Yalin Feng, Dimitris N. Metaxas†      
<span class="special-accent">ICML 2026</span>        
[[Paper]](https://arxiv.org/abs/2511.22009) [[Project Page]](https://world-snapshot.github.io/StreamFlow/) [[Code]](https://github.com/World-Snapshot/StreamFlow)          
🦄 <font color='green'>**Order-of-magnitude performance breakthrough:** The generation speed of Rectified Flow has been accelerated up to 611%, while the universal training-free Flow acceleration methods during the same period only increased by 18% or 30%.</font>
<!--(6352/23918, 26.56%)-->

</div></div>

</div>
</div>

<div id="pub-sign" class="tab-content pub-tab-content">
<div class="pub-container">

<div class="pub-item pub-image-auto-height-false">
<div class="pub-cover-overlay" data-overlay-text="SignVerse-2M">
<img src="cover/background_gallery_big.gif" alt="SignVerse-2M cover">
</div><div class="pub-content">

**SignVerse-2M: A Two-Million-Clip Pose-Native Universe of 25+ Sign Languages**    
**Sen Fang**, Hongbin Zhong, Yanxin Zhang, Dimitris N. Metaxas†      
[[Paper]]() [[Project Page]](https://signerx.github.io/SignVerse-2M/)      
<font color='green'>**Dataset breakthrough:**  Make sign language research practical, affordable, and scalable!</font>

</div></div>

<div class="pub-item pub-image-auto-height-false"><img src="cover/SignX2.png"><div class="pub-content">

**SignX: Continuous Sign Recognition in Compact Pose-Rich Latent Space**    
**Sen Fang**, Yalin Feng*, Chunyu Sui, Hongbin Zhong, Hongwei Yi, Dimitris N. Metaxas†      
[[Paper]](https://arxiv.org/abs/2504.16315) [[Project Page]](https://signerx.github.io/SignX/)      
💥 <font color='green'>**Performance breakthrough:**  2026 CSLR SOTA. The recognition and understanding tasks on any sign language dataset can/will achieve state-of-the-art results. Let Pose Recognition Happen in Latent Space, as well!</font>

</div></div>


<div class="pub-item pub-image-auto-height-false"><img src="cover/SignLLM.png"><div class="pub-content">

**SignLLM: Sign Language Production Large Language Models**     
**Sen Fang**, Chen Chen†, Lei Wang, Ce Zheng, Chunyu Sui, Yapeng Tian         
<span class="special-accent">ICCV 2025 CV4A11y</span>        
[[Paper]](https://arxiv.org/abs/2405.10718) [[Project Page]](https://signllm.github.io/) [[Data]](https://signllm.github.io/Prompt2Sign)      
🦄 <font color='green'>**Order-of-magnitude width breakthrough:** The single model supports the generation of 8 types of sign languages, and the number of SLP tasks it supports has increased by eight times.</font>
<br>**Note:** This work was reported by hundreds of media outlets and was viewed by tens of millions of people, and received an exclusive interview by <a href="https://www.newscientist.com/" class="venue-accent">New Scientist</a> (5M+ followers).

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

<div class="tabs"><span class="tab active" onclick="document.querySelectorAll('.exp-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('exp-work').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Work Experience</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.exp-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('exp-edu').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Education</span>&#8204;<span class="tab" onclick="document.querySelectorAll('.exp-tab-content').forEach(e=>e.classList.remove('active'));document.getElementById('exp-lineage').classList.add('active');this.parentElement.querySelectorAll('.tab').forEach(e=>e.classList.remove('active'));this.classList.add('active');">Academic Lineage</span></div>



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
  Research Intern: GenAI, Talking-Face 
  <br>
  Mentor: <a href="https://scholar.google.com/citations?user=ocMf7fQAAAAJ">DR. Hongwei Yi</a>
  <br>
  <i>May, 2025 -- July, 2025</i> <br>
  </p></td></tr></tbody></table>
<br>

<table class="imgtable"><tbody><tr><td>
  <a href="https://www.ucf.edu" target="_blank">
    <img src="logo/UCF.svg.png" alt="University of Central Florida" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><b>University of Central Florida  </b> <br>
  Research Assistant: 3DV-LLM, Multi-Modal
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
  Research Assistant: Vid2Vid, Multi-Modal
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
  Student Intern: Speech DL, Multi-Modal
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
  Developer Intern: <a href="https://github.com/apache/apisix">APISIX</a>/<a href="https://api7.ai/">api7.ai</a>, <a href="https://news.apache.org/foundation/entry/the-apache-software-foundation-announces66">Top Level Project</a>
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
  <td align="left"><p><span style="color:transparent">"</span><b>Rutgers University–New Brunswick  </b><span style="color:transparent">"</span> <br>
  <span style="color:transparent">"</span>Ph.D., Department of Computer Science<span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span>Advisor: <span class="special-accent">Board of Governors and Distinguished Professor</span><span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span><span class="special-accent">IEEE Fellow</span>, <span class="special-accent">Fellow AIMBE</span>, <span class="special-accent">Fellow MICCAI Society</span><span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span><a href="https://people.cs.rutgers.edu/~dnm/">Prof. Dimitris N. Metaxas</a><span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span>New Jersey (USA)<span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span><i>Sep, 2024 -- June, 2029 (Expected)</i><span style="color:transparent">"</span> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="https://www.vu.edu.au/" target="_blank">
    <img src="logo/vu.png" alt="Victoria University" width="100px" height="100"/>
  </a></td>
  <td align="left"><p><span style="color:transparent">"</span><b>Victoria University  </b><span style="color:transparent">"</span> <br>
  <span style="color:transparent">"</span>B.S., Department of Information Technology<span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span>Melbourne (Australia)<span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span><i>Sep, 2020 -- Jun, 2024</i><span style="color:transparent">"</span> <br>
  </p></td></tr></tbody></table>
<br>
<table class="imgtable"><tbody><tr><td>
  <a href="http://www.henu.edu.cn/" target="_blank">
    <img src="logo/lighthenu.png" alt="Henan University" height="100"/>
  </a></td>
  <td align="left"><p><span style="color:transparent">"</span><b>Henan University  </b><span style="color:transparent">"</span> <br>
  <span style="color:transparent">"</span>B.S., Department of Computer Science and Technology<span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span>Zhengzhou (China)<span style="color:transparent">"</span>
  <br>
  <span style="color:transparent">"</span><i>Sep, 2020 -- Jun, 2024</i><span style="color:transparent">"</span>
  <br>
  </p></td></tr></tbody></table>

</div>

<div id="exp-lineage" class="tab-content exp-tab-content">

- <a href="https://en.wikipedia.org/wiki/David_Marr_(scientist)" target="_blank"><b>David Marr</b></a> (1945–1980)<br>
<span style="color:transparent">"</span>Ph.D. in Physiology, <a href="https://en.wikipedia.org/wiki/Trinity_College,_Cambridge" target="_blank">Trinity College, Cambridge</a>; Faculty at <a href="https://en.wikipedia.org/wiki/MIT" target="_blank">MIT</a><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><font color='green'>Founder of computational vision; pioneered the three-level framework (computational, algorithmic, implementational) for understanding vision</font><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span>IJCAI Computers and Thought Award; the International Conference on Computer Vision (ICCV) Best Paper Award (<span class="special-accent">Marr Prize</span>) is named in his honor<span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><font color='red'>Referred to by most records as the <b>Father of Computational Vision</b><fn>Some historical accounts refer to Larry Roberts as the father of computer vision, but credit him primarily with initiating early machine vision through the geometric interpretation of edges, lines, and 3D structures. After his PhD work, he later transitioned away from vision research and became a pioneer of networking and ARPANET research. In contrast, David Marr introduced foundational concepts such as hierarchical visual representations, internal representations, information transformation, the primal sketch, the 2.5D sketch, and 3D model representations — terminology and ideas that continue to influence modern computer vision and embodied intelligence today. His lasting intellectual influence is reflected in ICCV’s David Marr Prize — the only best paper award across major computer vision conferences named after an individual researcher.
</fn></font><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span>Lab: Shimon Ullman (first PhD student); Eric Grimson (was MIT president); John M. Hollerbach (CIFAR, IEEE Fellow).<span style="color:transparent">"</span>

- <a href="https://en.wikipedia.org/wiki/Shimon_Ullman" target="_blank"><b>Shimon Ullman</b></a><br>
<span style="color:transparent">"</span>Ph.D., <a href="https://en.wikipedia.org/wiki/MIT" target="_blank">MIT</a> (1977), advised by David Marr; Professor, <a href="https://en.wikipedia.org/wiki/Weizmann_Institute_of_Science" target="_blank">Weizmann Institute of Science</a>; former Professor, <a href="https://en.wikipedia.org/wiki/MIT" target="_blank">MIT</a><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><font color='green'>Visual object/face recognition, visual saliency, computational models of biological vision</font><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><span class="special-accent">Member, American Academy of Arts and Sciences</span>; <span class="special-accent">Member, Israeli Academy of Sciences and Humanities</span>; <span class="special-accent">Fellow, Cognitive Science Society</span>; Israel Prize in Computer Science (2015); David E. Rumelhart Prize (2008); Azriel Rosenfeld Lifetime Achievement Award (2019)<span style="color:transparent">"</span><br>
<span style="color:transparent">"</span>Lab: <a href="https://www.weizmann.ac.il/math/shimon/home" target="_blank">Ullman Lab, Weizmann Institute of Science</a>; Graduated 33+ Ph.D. and 51+ M.S. students<span style="color:transparent">"</span>

- <a href="https://en.wikipedia.org/wiki/Demetri_Terzopoulos" target="_blank"><b>Demetri Terzopoulos</b></a><br>
<span style="color:transparent">"</span>Ph.D. in AI, <a href="https://en.wikipedia.org/wiki/MIT" target="_blank">MIT</a> (1984), advised by Shimon Ullman; Distinguished & Chancellor's Professor, <a href="https://en.wikipedia.org/wiki/University_of_California,_Los_Angeles" target="_blank">UCLA</a>; former Professor, <a href="https://en.wikipedia.org/wiki/University_of_Toronto" target="_blank">University of Toronto</a> & <a href="https://en.wikipedia.org/wiki/New_York_University" target="_blank">NYU</a><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><font color='green'>Computer graphics, computer vision, deformable models, active contours (snakes), medical imaging, artificial life</font><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><span class="special-accent">Fellow of the Royal Society (FRS)</span>; <span class="special-accent">Fellow of the Royal Society of Canada (FRSC)</span>; <span class="special-accent">IEEE Fellow</span>; <span class="special-accent">ACM Fellow</span>; Academy Award for Technical Achievement (2006); IEEE Computer Pioneer Award (2020); Helmholtz Prize (ICCV Test of Time Award, 2013); Inaugural Marr Prize (ICCV Best Paper Award, 1987)<span style="color:transparent">"</span><br>
<span style="color:transparent">"</span>Lab: <a href="http://gravilab.cs.ucla.edu/" target="_blank">UCLA Computer Graphics & Vision Group</a>; Graduated 50+ Ph.D. and 130+ M.S. students; advised 200+ students and postdoctoral scholars in total<span style="color:transparent">"</span>

- <a href="https://en.wikipedia.org/wiki/Dimitris_Metaxas" target="_blank"><b>Dimitris N. Metaxas</b></a><br>
<span style="color:transparent">"</span>Ph.D., <a href="https://en.wikipedia.org/wiki/University_of_Toronto" target="_blank">Toronto</a> (1992), advised by Demetri Terzopoulos; <span class="special-accent">Board of Governors and Distinguished Professor</span>, <a href="https://en.wikipedia.org/wiki/Rutgers_University" target="_blank">Rutgers</a>; former Professor, <a href="https://en.wikipedia.org/wiki/University_of_Pennsylvania" target="_blank">Pennsylvania</a><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><font color='green'>Computer vision, biomedical image analysis, medical image computing, deformable models</font><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><span class="special-accent">IEEE Fellow</span>; <span class="special-accent">Fellow AIMBE</span>; <span class="special-accent">Fellow MICCAI Society</span>; General Chair CVPR 2014 2026 & ICCV 2011 2031 & MICCAI 2008<span style="color:transparent">"</span><br>
<span style="color:transparent">"</span>Lab: <a href="https://cbim-rutgers.github.io/" target="_blank">CBIM, Rutgers University</a>; Graduated 80+ Ph.D. students (1/3 are professors worldwide)<span style="color:transparent">"</span>

- **Sen Fang**<br>
<span style="color:transparent">"</span>Ph.D. student, <a href="https://en.wikipedia.org/wiki/Rutgers_University" target="_blank">Rutgers University</a>, advised by Prof. Dimitris N. Metaxas<span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><font color='green'>Computer Vision, World Snapshot Model, Sign Language</font><span style="color:transparent">"</span><br>
<span style="color:transparent">"</span><span class="special-accent">ACL 2026 Best Paper Award Nominee</span><span style="color:transparent">"</span>

</div>

## Talks

- **Make an Appointment:** The quickest way to find me is to send me an email or remind me on X/Github/LinkedIn. Then we create a Google Calendar event.
- **Summary:** Amazon, Swiss Television, New Scientist, Waterloo, Dicpta Inc, Mo-Sys Inc.

*Including invitations I couldn't accept due to my busy schedule.*

## Service

- **Program Chair Member:** IEEE FG 2026, ICONIP 2024 2026, FM&LLM&GM 2025, EmpAI 2026
- **Conference Reviewer:** NeurIPS 2024 2026, ICML 2024, ICLR 2025, ICCV 2025, WACV 2026, ACM MM 2025-2026, IEEE FG 2025, ICONIP 2023-2024, EMNLP 2023, NAACL 2024, ACL ARR 2023-2024  

## Teaching

- **Spring 2026:** [01-198-323: Numerical Analysis and Computing](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-323-numerical-analysis-and-computing)
- **Fall 2025:** [01-198-336: Principles of Information and Data Management](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management)
- **Spring 2025:** [01-198-210: Data Management for Data Science](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-210-data-management-for-data-science)
- **Fall 2024:** [01-198-352: Internet Technology](https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-352-internet-technology)

## Awards

- **ACL 2026 Best Paper Award Nominee:** Out of 12,148 submissions. This is a highly competitive nomination for the award -- Over the recorded period from **2001 to 2025 whole world**, there were **76 ACL Best Papers**, and 21 of them had Chinese descent as the first author. ACL is the **1st-ranking** publication in the field of Natural Language Processing (NLP).
- **Best Bachelor's Thesis** in Henan University [[News]](https://jwc.henu.edu.cn/info/2145/8713.htm)  
- **National Encouragement Scholarship<fn>Undergraduate Student during Henan University</fn>:** 2020-2021, 2023-2024

## Other

<details><summary>Part of My Friends (alphabetical by institution)</summary>

- Georgia Tech: [Hongbin Zhong](https://rjzhb.github.io/)
- NTU: [Yalin Feng](https://yalin-feng.github.io)
- NVIDIA: [Yanxin Zhang](https://github.com/yanxinzhangcs)
- Rutgers: List of My Labmates; Levi Che
- Tsinghua, HKUST: Jiayin Zhu
- Waterloo: Yifan Wang
- I have guided some undergraduate students who were in lower grades than mine. I can't recall exactly how many there were, but it was more than 5 but less than 15.
<!-- [Chunyu Sui (林奈)](https://github.com/capsfly), [Baiang Li (ztmotalee)](https://ztmotalee.github.io/), [Yangyang Wu (考拉)](https://www.linkedin.com/in/yangyang-wu-2759181b3/) -->

</details>

<br>
<div style="width: 420px; height: 220px; overflow: hidden; margin: 20px auto;">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=DVOirx5xZoatWTrQvYVH2Jzv9fHuoX_NoHOytFe_XOo&cl=ffffff&w=a"></script>
</div>
