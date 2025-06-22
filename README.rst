Sample Module Repository
========================

This simple project is an example repo for Python projects.

`Learn more <http://www.kennethreitz.org/essays/repository-structure-and-python>`_.

Docker Support
--------------

This project can be easily run using Docker for consistent development and deployment.

Building and Running with Docker
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Build the Docker image::

    docker build -t phyton2-sample .

Run the container::

    docker run phyton2-sample

Using Docker Compose
~~~~~~~~~~~~~~~~~~~~~

For easier development, use docker-compose::

    docker-compose up --build

This will build the image and run the container with the current directory mounted as a volume.

Traditional Installation
-------------------------

Install dependencies::

    pip install -r requirements.txt

Install the package::

    pip install -e .

Run the sample::

    python -c "import sample; sample.hmm()"

---------------

If you want to learn more about ``setup.py`` files, check out `this repository <https://github.com/kennethreitz/setup.py>`_.
