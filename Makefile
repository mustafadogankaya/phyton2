init:
	pip install -r requirements.txt

test:
	python -m pytest tests/ -v

test-unittest:
	python -m tests.test_basic && python -m tests.test_advanced && python -m tests.test_initial_commit
