## Abstract

<table class="imgtable">
  <tr>


<p style="margin-bottom: 0; line-height: 1.3;">
        <b>Sen Fang</b>
      </p>
      <p style="margin-top: 0; margin-bottom: 0; line-height: 1.3;">
        Ph.D. Student, ACM Member
      </p>
      <p style="margin-top: 0; margin-bottom: 0; line-height: 1.3;">
        <a href="https://www.cs.rutgers.edu/">Department of Computer Science</a>
      </p>
      <p style="margin-top: 0; margin-bottom: 0; line-height: 1.3;">
        <a href="https://en.wikipedia.org/wiki/Rutgers_University">Rutgers, The State University of New Jersey</a>
      </p>
      <p style="margin-top: 0; margin-bottom: 0; line-height: 1.3;">
        <a href="https://scholar.google.com/citations?hl=en&user=BJb9MsgAAAAJ">Google Scholar</a> | <a href="https://github.com/fangsen9000/">Github</a> | <a href="https://orcid.org/0009-0007-9463-4491">ORCID</a> | <a href="https://twitter.com/SenFang01">X/Twitter</a>
      </p>
      <p style="margin-top: 0; margin-bottom: 0; line-height: 1.3;">
        <a href="https://openreview.net/profile?id=~Sen_Fang2">OpenReview</a> | <a href="https://www.linkedin.com/in/fangsen/">Linkedin</a> | <a href="https://github.com/FangSen9000/FangSen9000/issues/1">All-Emails</a>
      </p>
      <p style="margin-top: 0; margin-bottom: 10px; line-height: 1.3;">
        Email: fangsen2024 [at] gmail [dot] com
      </p>

  </tr>
</table>

In this article, we define and propose a kind of ideal world model called the World Snapshot Model. This model aims to unify, record, understand, and generate the digitized world at the pixel level. It is trained using the WaveGen framework and employs ControlWave UI for conditional control. WaveGen is a new wave-based generative method/concept that we proposed and designed, consisting of three data space domains: text, core/wave space, and pixel layer, and bidirectional transformations between different domains of wave model are implemented through flow models. The core space is a wave space that accommodates multiple sets of wave functions and serves as the world core of the World Snapshot Model.

The World Snapshot Model achieves: 1. By creating a wave space, it enables the encoding of spatiotemporal information into the visual model's latent space, allowing for explicit control and utilization. 2. It embeds physical rules into the visual model's latent space, namely our wave/core space. 3. By leveraging the characteristics of the data structure itself, it achieves pixel-level control without requiring secondary training like ControlNet, enabling hundreds of conditional controls. Our Snapshot Model uses newly defined data structures (WSG, WSV, WSF) that we have developed to train and generate.

Our model demonstrates good performance in semantic consistency, human ID consistency, 4D spatiotemporal consistency, physical realism, degree of control in conditional generation, generation speed, image-to-video generation, and 3D reconstruction capabilities. Our model can play a forward-looking role in film production, world generation and understanding, XR content creation, and AI animation engines.

*More [TLDRs](https://world-snapshot.github.io/doc/index.html?page=S6_materials/02_guideline.md#tldr-of-project-page) can explain our design principles. More our summary/contribution at [here](https://world-snapshot.github.io/doc/index.html#summary).*