<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Codex Creator's Club</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <!-- Your Custom CSS -->
  <link rel="stylesheet" href="style.css"> 
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Codex Creator's Club</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ml-auto"> 
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item"><button class="btn btn-primary" type="button">Join Now</button></li> 
        </ul>
      </div>
    </div>
  </nav>

 <!-- Services Overview with Images -->
<section class="services py-5">
    <div class="container text-center">
        <h2 class="mb-4">Our Key Services</h2>
        <div class="row">
            <?php
            $services = [
                ['Mastering AI', 'Explore advanced AI tutorials and resources.', 'masteringai.png'],
                ['Software Development', 'Master the art of software development with expert guides.', 'software-service.jpg'],
                ['Web Development', 'Create stunning websites with comprehensive tutorials.', 'web-service.jpg'],
                ['Digital Marketing', 'Enhance your digital presence with advanced strategies.', 'marketing-service.jpg'],
            ];
            foreach ( $services as $service ) : ?>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="service-box p-4">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/build/images/' . $service[2] ); ?>" alt="<?php echo esc_attr( $service[0] ); ?>" class="img-fluid mb-3 rounded">
                        <h3><?php echo esc_html( $service[0] ); ?></h3>
                        <p><?php echo esc_html( $service[1] ); ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Latest Blog Posts -->
<section class="blog py-5 bg-light">
    <div class="container text-center">
        <h2 class="mb-4">Latest Blog Posts</h2>
        <div class="row">
            <?php
            $recent_posts = new WP_Query([
                'posts_per_page' => 3,
                'post_status' => 'publish',
            ]);
            if ( $recent_posts->have_posts() ) :
                while ( $recent_posts->have_posts() ) : $recent_posts->the_post(); ?>
                    <div class="col-lg-4 mb-4">
                        <div class="blog-post p-4">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <img src="<?php echo esc_url( get_the_post_thumbnail_url( get_the_ID(), 'medium' ) ); ?>" alt="<?php the_title_attribute(); ?>" class="img-fluid mb-3 rounded">
                            <?php endif; ?>
                            <h3><?php the_title(); ?></h3>
                            <p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 20, '...' ) ); ?></p>
                            <a href="<?php the_permalink(); ?>" class="btn btn-link">Read More</a>
                        </div>
                    </div>
                <?php endwhile;
                wp_reset_postdata();
            else : ?>
                <p>No blog posts found.</p>
            <?php endif; ?>
        </div>
    </div>
</section>

<!-- Testimonials Section with Images -->
<section class="testimonials py-5">
    <div class="container text-center">
        <h2 class="mb-4">What Our Members Say</h2>
        <div class="row">
            <?php
            $testimonials = [
                ['Jane Doe', 'Codex Creator\'s Club has been a game-changer for my career!', 'member1.jpg'],
                ['John Smith', 'The resources here are incredibly useful for developers at all levels.', 'member2.jpg'],
                ['Sarah Lee', 'I love the community and learning opportunities provided here.', 'member3.jpg'],
            ];
            foreach ( $testimonials as $testimonial ) : ?>
                <div class="col-lg-4 mb-4">
                    <div class="testimonial p-4">
                        <img src="<?php echo esc_url( get_template_directory_uri() . '/build/images/' . $testimonial[2] ); ?>" alt="<?php echo esc_attr( $testimonial[0] ); ?>" class="img-fluid rounded-circle mb-3" style="width: 80px;">
                        <p>"<?php echo esc_html( $testimonial[1] ); ?>"</p>
                        <h5>- <?php echo esc_html( $testimonial[0] ); ?></h5>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>


  <!-- Bootstrap JavaScript -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
